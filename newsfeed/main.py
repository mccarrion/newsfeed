from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

from newsfeed import service, models
from newsfeed.database import dbschema
from newsfeed.database.config import SessionLocal, engine

dbschema.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/articles/create", response_model=models.Article)
def create_article(article: models.ArticleCreate, db: Session = Depends(get_db)):
    return service.create_article(db=db, article=article)


@app.get("/articles/", response_model=list[models.Article])
def get_articles(db: Session = Depends(get_db)):
    articles = service.get_articles(db)
    return articles


@app.get("/")
async def root():
    return {"message": "Hello World"}