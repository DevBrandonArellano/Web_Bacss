# BACSS S.A.S. - Landing Page Corporativa con IA

Bienvenido al repositorio de la landing page de BACSS S.A.S., una consultora de software en Quito, Ecuador. Esta aplicación web ha sido construida con tecnología de vanguardia para ofrecer una experiencia de usuario moderna, interactiva y optimizada para la conversión.

## 🚀 Características Principales

*   **Next.js 14 (App Router):** Framework React para renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).
*   **TypeScript:** Para un desarrollo más robusto y escalable con tipado estático.
*   **Tailwind CSS:** Para un diseño rápido y responsivo basado en utilidades, con soporte para Dark/Light Mode.
*   **Optimización SEO:** Metadatos detallados para Google y redes sociales, enfocados en "Software de Inventarios e IA en Quito, Ecuador".
*   **Diseño Responsivo:** Adaptabilidad completa a dispositivos móviles y de escritorio, incluyendo un menú de navegación tipo "hamburguesa" para móviles.
*   **Experiencia de Usuario Dinámica (UX Exagerada):**
    *   Animaciones fluidas con [Framer Motion](https://www.framer.com/motion/) en la entrada de secciones, tarjetas y elementos clave.
    *   Efectos de hover interactivos y animaciones de texto por palabras en la sección Hero.
    *   Componentes visuales animados como la `AnimatedSphere`.
    *   Botón de chat flotante con animación de "pop-in" y efectos al pasar el cursor.
*   **Modo Oscuro/Claro:** Alternancia de tema para una experiencia visual personalizada.
*   **Contenido Comercial Completo:**
    *   Secciones dedicadas a "Nosotros" (Visión), "El Desafío" (Problemas del mercado), "Portafolio de Soluciones" (Servicios detallados), "El Método BACSS" (Proceso de implementación), "¿Por qué BACSS?" (Ventajas competitivas) y "Preguntas Frecuentes (FAQ)".
*   **Integración de IA (Ollama):**
    *   API de chat (`/api/chat`) diseñada para conectarse con un servidor local de Ollama.
    *   Base de conocimiento simple para respuestas predefinidas sobre "precios" e "inventarios".
*   **Dashboard Interactivo:** Componente de demostración de reportes gerenciales con gráficos de [Recharts](https://recharts.org/).
*   **Dockerización:** Configuración para levantar la aplicación y el servidor de Ollama en contenedores Docker.

## 📦 Cómo Empezar

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

*   [Node.js](https://nodejs.org/) (versión 18 o superior)
*   [npm](https://www.npmjs.com/) (viene con Node.js)
*   [Docker Desktop](https://www.docker.com/products/docker-desktop/) (para la ejecución en contenedores)
*   [Ollama](https://ollama.com/download) (para el servidor local de IA)

### Instalación

1.  Clona este repositorio:
    ```bash
    git clone YOUR_REPO_URL
    cd bacss-web # o el nombre de tu carpeta
    ```
2.  Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

### Ejecución Local

#### Opción 1: Ejecutar la aplicación y Ollama directamente (Recomendado para desarrollo)

1.  **Iniciar el servidor de Ollama y descargar el modelo Llama 3:**
    Abre una terminal y ejecuta:
    ```bash
    ollama run llama3
    ```
    Deja esta terminal abierta. Puedes verificar que Ollama está corriendo visitando `http://localhost:11434` en tu navegador.
2.  **Iniciar el servidor de desarrollo de Next.js:**
    Abre *otra* terminal en el directorio raíz del proyecto y ejecuta:
    ```bash
    npm run dev
    ```
3.  Abre tu navegador y visita `http://localhost:3000`.

#### Opción 2: Ejecutar con Docker Compose

Si prefieres usar Docker para levantar la aplicación y Ollama:

1.  Asegúrate de que Docker Desktop esté corriendo.
2.  Abre una terminal en el directorio raíz del proyecto.
3.  Construye y levanta los contenedores:
    ```bash
    docker-compose up --build
    ```
4.  La aplicación Next.js estará disponible en `http://localhost:3000` y Ollama en `http://localhost:11434`. Ten en cuenta que la primera vez, Ollama descargará el modelo Llama 3 dentro del contenedor, lo que puede tomar un tiempo.

### Probando la Integración de IA (Chatbot)

La API de chat está en `/api/chat`. Puedes probarla de la siguiente manera (una vez que Ollama esté corriendo):

*   **Respuestas predefinidas:**
    Envía una solicitud `POST` a `http://localhost:3000/api/chat` con `{"message": "precios"}` o `{"message": "inventarios"}`.
*   **Respuestas de Llama 3:**
    Envía una solicitud `POST` a `http://localhost:3000/api/chat` con cualquier otra pregunta, por ejemplo: `{"message": "¿Qué es la inteligencia artificial?"}`.

## ☁️ Despliegue en Oracle Cloud (OCI)

Para instrucciones detalladas sobre cómo desplegar esta aplicación y el servidor de Ollama en Oracle Cloud Infrastructure (OCI), consulta el archivo `OCI_Deployment_Guide.md` en la raíz de este repositorio.

## 📂 Estructura del Proyecto

```
.
├── app/                  # Directorio principal de la aplicación Next.js (App Router)
│   ├── api/              # Rutas de la API (ej. chat API)
│   ├── globals.css       # Estilos globales de Tailwind
│   ├── layout.tsx        # Layout raíz de la aplicación (incluye SEO, Navbar, ThemeProvider)
│   ├── page.tsx          # Página de inicio principal (integra todas las secciones)
│   └── providers/        # Proveedores de contexto (ej. ThemeProvider)
├── components/           # Componentes reutilizables de UI
│   ├── ui/               # Componentes de UI genéricos (ej. Button, Accordion)
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Dashboard.tsx
│   ├── FaqSection.tsx
│   ├── Navbar.tsx
│   ├── ProblemSection.tsx
│   ├── ProcessSection.tsx
│   ├── ThemeToggle.tsx
│   └── WhyBacssSection.tsx
├── public/               # Archivos estáticos (ej. logo)
│   └── bacss_logo.png
├── docker-compose.yml    # Configuración de Docker Compose para la aplicación y Ollama
├── Dockerfile            # Dockerfile para la aplicación Next.js
├── next.config.mjs       # Configuración de Next.js
├── OCI_Deployment_Guide.md # Guía para el despliegue en Oracle Cloud
├── package.json          # Dependencias y scripts de npm
├── postcss.config.js     # Configuración de PostCSS
├── README.md             # Este archivo
├── tailwind.config.ts    # Configuración de Tailwind CSS
├── tsconfig.json         # Configuración de TypeScript
└── .gitignore            # Archivos y directorios a ignorar por Git
```

## 📄 Documentación Detallada (en español)

Para una documentación más detallada sobre la arquitectura del proyecto, los componentes y las características clave, consulta el archivo [DETAILED_DOCUMENTATION.md (en español)](DETAILED_DOCUMENTATION.md).

## 📞 Contacto

Para consultas comerciales o soporte técnico, por favor, contacta a BACSS S.A.S. a través de los canales en la sección de contacto de la página web o directamente al email: `contacto@bacss.com`.
