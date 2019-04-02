# Experimenting with Dockerfile builds until React app is a production
# build being served quickly over the internet

# Google's base image
# gcr.io/google_appengine/nodejs

# base image
FROM gcr.io/google_appengine/nodejs

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install

# Bundle app source
COPY . .

# Specify port
EXPOSE 5000

# Create production build and ability to serve it
RUN npm run build
RUN npm install -g serve

# Serve production app
CMD ["serve", "-s", "build", "-l", "5000"]