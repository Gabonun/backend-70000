#Definimos la imagen
FROM node

#Creamos la carpeta interna
WORKDIR /app

#Copiamos el package.json
COPY package.json .

#Instalamos las dependencias
RUN npm install

#Se genera un error de compatibilidad con bcrypt por lo que se requieren los siguientes comandos para eliminar y reinstalar bcrypt en el dockerfile
RUN npm uninstall bcrypt && npm install bcrypt

#Copiamos todo el código de la aplicación
COPY . .

#Elegimos el puerto
EXPOSE 8080

#Ejecutamos npm start para funcionar
CMD [ "npm", "start" ]
