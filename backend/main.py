import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.api.router import api_router
from backend.db import db_user, db_article
from backend.db.config import engine

# This creates DB schema according to the models localed in the "db" folder:
db_user.Base.metadata.create_all(bind=engine)
db_article.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Below method is being used as a sanity check when debugging to make sure the debugger is actually working
@app.get("/")
def root():
    a = "a"
    b = "b" + a
    return {"hello world": b}


app.include_router(api_router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
