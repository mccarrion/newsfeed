# Pull base image
FROM mhart/alpine-node

# Set the working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
ADD package.json /app/package.json
RUN npm install

# Bundle app
COPY . .

# Specify port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
