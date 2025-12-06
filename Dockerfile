# Use official Node.js image as the build environment
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

# Use official Nginx image to serve the build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .
# Remove default Nginx static assets config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
