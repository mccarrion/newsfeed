# build environment
FROM node:9.6.1 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


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
