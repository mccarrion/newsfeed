Newsfeed Website
========================

This is a newsfeed website with a fully decoupled frontend and backend. The frontend which is stored in **frontend**
is a React app written in JavaScript. The backend which is stored in **backend** is written in Python using the FastAPI
library.

## Current state of the App

On the side I am working on a full rewrite of the fullstack app. A decent number of features will be dropped as we are 
starting over from the beginning. Django is being replaced with FastAPI. Frontend will remain React but be developed in 
a more straightforward way.

## Notes on Development

Note #1: On my local environment there is a virtual environment located at `/newsfeed/backend/.venv`. This is where the
various libraries are installed including: `pydantic`, `fastapi`, and `sqlalchemy`.

Note #2: This plugin is being used in VSCode to view the database: [SQLite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer)

The database is located at `/backend/database/newsfeed.sqlite`