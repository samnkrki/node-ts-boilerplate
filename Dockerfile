# Stage 1: Build
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build:release

# Stage 2: Production Image
FROM node:20-alpine AS staging

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./

ENV NODE_ENV=staging

RUN npm prune --production

# store temporary files
RUN mkdir -p /app/assets/temp

# Add non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]

# create a docker image
# docker build --no-cache -f Dockerfile -t node-ts-bp:latest --target staging .