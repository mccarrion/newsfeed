from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..schema import article as models
from ..crud import crud_article as service
from backend.db.config import engine, get_db

router = APIRouter()


@router.post("/articles/create/")
def create_article(article: models.ArticleCreate, db: Session = Depends(get_db)):
    return service.create_article(db=db, article=article)


@router.get("/articles/", response_model=list[models.Article])
def get_articles(db: Session = Depends(get_db)):
    articles = service.get_articles(db)
    return articles
