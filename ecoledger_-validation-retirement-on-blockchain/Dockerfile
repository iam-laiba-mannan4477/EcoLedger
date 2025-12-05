# Build stage
FROM node:18.19.0-slim AS build

WORKDIR /app

# Update OS packages and install node dependencies
RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:1.27

# Update OS packages in production image
RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

