from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..models import articles as models
from ..service import articles as service
from backend.database.config import engine, get_db
from backend.database import article_schema

router = APIRouter()

article_schema.Base.metadata.create_all(bind=engine)


@router.post("/articles/create/")
def create_article(article: models.ArticleCreate, db: Session = Depends(get_db)):
    return service.create_article(db=db, article=article)


@router.get("/articles/", response_model=list[models.Article])
def get_articles(db: Session = Depends(get_db)):
    articles = service.get_articles(db)
    return articles
