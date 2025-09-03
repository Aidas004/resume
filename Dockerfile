# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies - use npm install instead of npm ci
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app/dist ./dist

# Install serve globally
RUN npm install -g serve

# Expose port
EXPOSE 5173

# Start the application using serve
CMD ["serve", "-s", "dist", "-l", "5173"]
