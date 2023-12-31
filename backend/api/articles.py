from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..schema import article as schemas
from ..crud import crud_article as crud
from backend.db.config import get_db

router = APIRouter()


@router.post("/articles/create/")
def create_article(article: schemas.ArticleCreate, db: Session = Depends(get_db)):
    return crud.create_article(db=db, article=article)


@router.get("/articles/", response_model=list[schemas.Article])
def get_articles(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    articles = crud.get_articles(db, skip=skip, limit=limit)
    return articles


@router.get("/articles/{article_id}/", response_model=schemas.Article)
def get_article(article_id: int, db: Session = Depends(get_db)):
    db_article = crud.get_article(db, article_id=article_id)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return db_article
