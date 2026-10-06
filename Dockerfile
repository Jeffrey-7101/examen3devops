FROM node:20-alpine as builder

workdir /app
copy package.json package-lock.json ./
run npm install

copy . .
expose 3000
cmd ["npm", "start"]