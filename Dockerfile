FROM node:14-alpine AS development
# Setting working directory
WORKDIR /app
# Copy files into the Directory
COPY package.json .
COPY package-lock.json .
# Installing dependencies.
RUN npm install
# Copy app files
COPY . .
# Exposing port 3000
EXPOSE 3000
# Running project in dev mode.
CMD ["npm","run","start"]

FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
# Installing dependencies.
RUN npm install --only=prod
# Copy app files
COPY . .
# Build the app
RUN npm run build

FROM nginx:1.21.6-alpine as production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Expose port
EXPOSE 80
