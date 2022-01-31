FROM node:12.16.3-slim

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000
CMD [ "npm", "run", "dev:regcheq:backend" ]
