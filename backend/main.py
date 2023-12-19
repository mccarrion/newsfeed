import uvicorn
from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

from backend import service, models
from backend.database import dbschema
from backend.database.config import SessionLocal, engine

dbschema.Base.metadata.create_all(bind=engine)

app = FastAPI()


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
    uvicorn.run("main:app", host="0.0.0.0", port=34000, reload=True)
