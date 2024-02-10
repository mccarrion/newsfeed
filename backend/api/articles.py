from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..logic.crud_user import get_current_active_user
from ..schema import article as schemas
from ..schema import user as user_schema
from ..logic import crud_article as crud
from backend.db.config import get_db

router = APIRouter()


@router.post("/articles/create/")
def create_article(article: schemas.ArticleCreate, db: Session = Depends(get_db)):
    return crud.create_article(db=db, article=article)


@router.get("/articles/update/", response_model=list[schemas.Article])
def get_articles_to_update(current_user: Annotated[user_schema.User, Depends(get_current_active_user)]):
    return current_user.articles


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
