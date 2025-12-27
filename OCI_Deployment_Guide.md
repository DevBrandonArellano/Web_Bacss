# Guía de Despliegue en Oracle Cloud (OCI)

Esta guía asume que ya tienes una instancia de VM (Compute Instance) creada en OCI y tienes acceso a ella mediante SSH.

## Paso 1: Configurar Reglas de Entrada (Ingress Rules)

Para que tu aplicación sea accesible desde internet, debes abrir los puertos 80 (HTTP) y 443 (HTTPS) en la Virtual Cloud Network (VCN) de tu instancia.

1.  **Navega a la VCN**: En el panel de control de OCI, ve a "Networking" -> "Virtual Cloud Networks".
2.  **Selecciona tu VCN**: Haz clic en la VCN a la que está asociada tu instancia.
3.  **Ve a las Listas de Seguridad (Security Lists)**: En el menú de la izquierda, haz clic en "Security Lists" y luego selecciona la lista de seguridad de tu subred (normalmente llamada "Default Security List for...").
4.  **Añade las Reglas de Entrada (Add Ingress Rules)**:
    *   **Regla para HTTP (Puerto 80)**:
        *   **Source CIDR**: `0.0.0.0/0` (Esto permite tráfico desde cualquier dirección IP).
        *   **IP Protocol**: `TCP`.
        *   **Destination Port Range**: `80`.
        *   Haz clic en "Add Ingress Rules".
    *   **Regla para HTTPS (Puerto 443)**:
        *   **Source CIDR**: `0.0.0.0/0`.
        *   **IP Protocol**: `TCP`.
        *   **Destination Port Range**: `443`.
        *   Haz clic en "Add Ingress Rules".

Tu instancia ahora puede recibir tráfico en los puertos 80 y 443.

## Paso 2: Instalar Docker y Docker Compose

Conéctate a tu instancia por SSH y sigue las instrucciones oficiales para instalar Docker y Docker Compose en tu sistema operativo (generalmente Linux).

```bash
# Ejemplo para Ubuntu
sudo apt-get update
sudo apt-get install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo apt-get install docker-compose -y
```

## Paso 3: Subir tu Código y Ejecutar Docker Compose

1.  Sube el código de tu aplicación (incluyendo `Dockerfile` y `docker-compose.yml`) a tu instancia de OCI. Puedes usar `scp` o Git.
2.  Desde el directorio de tu proyecto en la instancia, ejecuta el siguiente comando para construir y levantar los contenedores en segundo plano:

```bash
sudo docker-compose up -d --build
```

Esto iniciará tu aplicación Next.js en el puerto 3000 y el servicio de Ollama en el puerto 11434.

## Paso 4: (Recomendado) Configurar un Reverse Proxy con Nginx

No es una buena práctica exponer el puerto 3000 directamente. Un reverse proxy como Nginx puede manejar las peticiones a los puertos 80 y 443 y redirigirlas a tu aplicación. También facilita la configuración de SSL (HTTPS).

1.  **Instala Nginx**:
    ```bash
    sudo apt-get install nginx -y
    ```

2.  **Configura Nginx**:
    *   Crea un nuevo archivo de configuración para tu sitio:
        ```bash
        sudo nano /etc/nginx/sites-available/bacss-web
        ```
    *   Pega la siguiente configuración (reemplaza `tudominio.com` con tu dominio real):

    ```nginx
    server {
        listen 80;
        server_name tudominio.com www.tudominio.com;

        # Redirigir todo el tráfico HTTP a HTTPS
        location / {
            return 301 https://$host$request_uri;
        }
    }

    server {
        listen 443 ssl;
        server_name tudominio.com www.tudominio.com;

        # Rutas a tus certificados SSL (usa Certbot para obtenerlos gratis)
        # ssl_certificate /etc/letsencrypt/live/tudominio.com/fullchain.pem;
        # ssl_certificate_key /etc/letsencrypt/live/tudominio.com/privkey.pem;

        location / {
            proxy_pass http://localhost:3000; # Redirige a la app de Next.js
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Opcional: Si quieres exponer la API de Ollama (¡CUIDADO!)
        # No se recomienda exponer Ollama públicamente sin autenticación.
        # La comunicación entre la web y Ollama se hace por la red interna de Docker.
    }
    ```

3.  **Habilita la configuración y reinicia Nginx**:
    ```bash
    sudo ln -s /etc/nginx/sites-available/bacss-web /etc/nginx/sites-enabled/
    sudo nginx -t # Para probar la configuración
    sudo systemctl restart nginx
    ```

4.  **Obtén un certificado SSL (HTTPS)**:
    Usa `certbot` para obtener un certificado gratuito de Let's Encrypt.
    ```bash
    sudo apt-get install certbot python3-certbot-nginx -y
    sudo certbot --nginx -d tudominio.com -d www.tudominio.com
    ```
    Certbot modificará automáticamente tu archivo de configuración de Nginx para usar los certificados.

¡Tu aplicación ahora debería estar desplegada y accesible de forma segura a través de tu dominio!
