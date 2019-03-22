# Pull base image
FROM gcr.io/google_appengine/nodejs AS build

# Set the working directory
WORKDIR /app
COPY . .

# Create production build
RUN npm run build

# Install app dependencies
FROM gcr.io/google_appengine/nodejs

# Bundle app
COPY --from=build /app/build .
RUN npm install -g serve

# Start app
CMD npm start
