# Dockerfile para una aplicación Next.js

# ---- Stage 1: Dependency Installation ----
# Usa una imagen base de Node.js para instalar dependencias.
FROM node:18-alpine AS deps
WORKDIR /app

# Copia package.json y package-lock.json (si existe)
COPY package.json ./
# Descomenta la siguiente línea si usas package-lock.json
# COPY package-lock.json ./

# Instala las dependencias
RUN npm install

# ---- Stage 2: Builder ----
# Usa la misma imagen base para la consistencia
FROM node:18-alpine AS builder
WORKDIR /app

# Copia las dependencias instaladas desde la etapa 'deps'
COPY --from=deps /app/node_modules ./node_modules
# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación de Next.js para producción
RUN npm run build

# ---- Stage 3: Runner ----
# Usa una imagen de Node.js ligera para la ejecución
FROM node:18-alpine AS runner
WORKDIR /app

# Establece las variables de entorno para producción
ENV NODE_ENV=production
# Descomenta y establece el nombre de host si es necesario
# ENV HOSTNAME=0.0.0.0

# Copia los artefactos de compilación desde la etapa 'builder'
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expone el puerto en el que se ejecuta la aplicación (por defecto 3000)
EXPOSE 3000

# El comando para iniciar el servidor de Next.js
CMD ["node", "server.js"]
