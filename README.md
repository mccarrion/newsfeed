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

Note #2: This plugin is being used in VSCode to view and edit the database: [SQLite3 Editor](https://marketplace.visualstudio.com/items?itemName=yy0931.vscode-sqlite3-editor)

The database is located at `/backend/database/newsfeed.sqlite`

Note #3: The logic for logins and authentication on the Python side mainly came from here: [OAuth2 with Password (and hashing), Bearer with JWT tokens](https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/)

Note #4: Frontend is using Zustand for state management. Not particularly clear if having a store is necessary for this web app.
Additionally, user auth token is beißng persisted in "localStorage" which is a security flaw. 

Note #5: Need to look into keeping access and refresh tokens in HttpOnly cookies to close come security holes here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
