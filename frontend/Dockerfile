# Experimenting with Dockerfile builds until React app is a production
# build being served quickly over the internet
# build environment
# base image
FROM node:9.4

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install

# Bundle app source
COPY . .

# Specify port
EXPOSE 3000

# start app
CMD ["npm", "start"]

# # Pull base image
# FROM gcr.io/google_appengine/nodejs AS build

# # Set the working directory
# WORKDIR /app

# # Install and cache app dependencies
# COPY package*.json ./
# ADD package.json /app/package.json
# RUN npm install

# # Bundle app
# COPY . .

# # Create production build
# RUN npm run build

# # Install app dependencies
# FROM gcr.io/google_appengine/nodejs

# # Bundle app
# COPY --from=build /app/build .
# RUN npm install -g serve

# # Expose port
# EXPOSE 3000

# # Start app
# CMD npm start
