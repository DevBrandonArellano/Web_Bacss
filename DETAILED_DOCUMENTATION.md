# Documentación Detallada del Proyecto Web de BACSS

## 1. Descripción General del Proyecto

Este proyecto es una moderna página web de marketing de una sola página para BACSS S.A.S., una consultora de tecnología con sede en Ecuador. Está construido con Next.js 14 (usando el App Router) y TypeScript, y estilizado con Tailwind CSS. El objetivo principal del sitio web es mostrar los servicios de la empresa, sus capacidades técnicas y proporcionar un punto de contacto.

El sitio web está diseñado para ser responsivo, con una interfaz de usuario limpia y moderna que incluye temas claro y oscuro. Utiliza intensivamente animaciones con Framer Motion para crear una experiencia de usuario dinámica y atractiva.

## 2. Arquitectura

El proyecto sigue una arquitectura basada en componentes. La página principal, ubicada en `app/page.tsx`, ensambla varias secciones del directorio `/components` para crear una experiencia de una sola página. Este enfoque modular facilita el mantenimiento y la escalabilidad del código base.

El diseño raíz de la aplicación se define en `app/layout.tsx`, que incluye metadatos de SEO, gestión de temas a través de `ThemeProvider` y la barra de navegación global.

## 3. Características Clave

### Diseño Responsivo y Temas
El sitio web es totalmente responsivo y se adapta a diferentes tamaños de pantalla. También incluye un interruptor de tema claro/oscuro, permitiendo a los usuarios elegir su modo de visualización preferido.

### Animaciones
La interfaz de usuario está mejorada con animaciones usando Framer Motion. Esto crea una experiencia más interactiva y visualmente atractiva para el usuario.

### Chatbot con IA
Una de las características más avanzadas de este proyecto es el chatbot con IA. El chatbot se implementa con un componente de frontend que interactúa con una ruta de API de backend en `app/api/chat/route.ts`.

El backend utiliza la biblioteca `ollama` para conectarse a un modelo de lenguaje `llama3` alojado localmente. Emplea un enfoque híbrido en el que primero comprueba una base de conocimientos simple y codificada para preguntas comunes. Si la respuesta no se encuentra en la base de conocimientos, recurre al LLM para una respuesta más general. La respuesta del backend se transmite luego al cliente.

## 4. Frontend

### Componentes
El frontend está construido con un conjunto de componentes de React reutilizables, ubicados en el directorio `/components`. Algunos of the key components include:

- **`Navbar.tsx`**: La barra de navegación global.
- **`AboutSection.tsx`**: Una sección que muestra la visión y misión de la empresa.
- **`ContactSection.tsx`**: Una sección con información de contacto y un formulario de contacto.
- **`Dashboard.tsx`**: Un componente que muestra las capacidades de visualización de datos.
- **`FaqSection.tsx`**: Una sección con preguntas frecuentes.
- **`ThemeToggle.tsx`**: El botón para cambiar entre los temas claro y oscuro.

### Dashboard
El componente `Dashboard` es una herramienta de marketing clave en el sitio web. Es importante tener en cuenta que se trata de una maqueta estática que utiliza datos codificados (`inventoryData`) para simular un tablero real. Demuestra el uso de la biblioteca `recharts` para la visualización de datos.

## 5. Backend

### Ruta de la API: `/api/chat`
El backend del chatbot de IA es manejado por la ruta de la API en `app/api/chat/route.ts`. Esta ruta recibe una solicitud POST con el mensaje del usuario y devuelve una respuesta transmitida desde la IA.

El backend utiliza la biblioteca `ollama` para interactuar con un modelo de lenguaje `llama3`. También incluye una `knowledgeBase` con respuestas predefinidas a preguntas comunes. Este enfoque permite respuestas rápidas a consultas frecuentes mientras se aprovecha el poder de un modelo de lenguaje grande para preguntas más complejas.

## 6. Pila Tecnológica

El proyecto está construido con las siguientes tecnologías y bibliotecas:

- **Next.js 14**: El marco principal para la aplicación.
- **TypeScript**: Para tipado estático y una mejor experiencia de desarrollo.
- **Tailwind CSS**: Para estilizar la aplicación.
- **Framer Motion**: Para animaciones.
- **Recharts**: Para la visualización de datos en el componente `Dashboard`.
- **Ollama**: Para interactuar con el modelo de lenguaje `llama3`.
- **next-themes**: Para gestionar los temas claro y oscuro.