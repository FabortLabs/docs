FROM node:22-alpine AS build

WORKDIR /app/docs

COPY docs/package.json docs/package-lock.json ./
RUN npm ci --ignore-scripts

COPY docs .
RUN npm run postinstall
RUN npm run build

FROM nginx:1.27-alpine

COPY docs/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/docs/.output/public /usr/share/nginx/html

EXPOSE 3003
