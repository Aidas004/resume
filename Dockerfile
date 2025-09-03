# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies defined in package.json
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port that the Vite dev server will run on
EXPOSE 5173

# Command to start the development server using npm
CMD ["npm", "run", "dev"]
