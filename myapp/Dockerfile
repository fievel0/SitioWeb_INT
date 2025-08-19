# Etapa 1: Construcción
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir archivos con un servidor ligero
FROM nginx:stable-alpine

# Copiar el build de React al directorio que Nginx sirve
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
