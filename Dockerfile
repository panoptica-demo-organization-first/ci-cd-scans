# Use an official Node runtime as a parent image
FROM node:18-alpine

# RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# USER appuser

# Set the working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ ./

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
