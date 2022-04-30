FROM --platform=linux/amd64 node:18-alpine3.14

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install --silent

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]