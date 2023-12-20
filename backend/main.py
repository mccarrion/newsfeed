import uvicorn
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from backend import service, models
from backend.database import dbschema
from backend.database.config import SessionLocal, engine

dbschema.Base.metadata.create_all(bind=engine)

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


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/articles/create/")
def create_article(article: models.ArticleCreate, db: Session = Depends(get_db)):
    return service.create_article(db=db, article=article)


@app.get("/articles/", response_model=list[models.Article])
def get_articles(db: Session = Depends(get_db)):
    articles = service.get_articles(db)
    return articles


# Below method is being used as a sanity check when debugging to make sure the debugger is actually working
@app.get("/")
def root():
    a = "a"
    b = "b" + a
    return {"hello world": b}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
