# Etapa 1: Construcción de la aplicación React
FROM node:22 as builder

# Configurar directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación para producción
RUN npm run build

# Exponer el puerto del servidor
EXPOSE 80