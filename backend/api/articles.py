from typing import Annotated

from fastapi import APIRouter, Cookie, Depends, HTTPException, Request
from sqlalchemy.orm import Session

from ..logic.crud_user import get_current_user
from ..schema import article as schemas
from ..logic import crud_article, crud_favorite, crud_like
from backend.db.config import get_db

router = APIRouter()


@router.post("/articles/create/")
def create_article(article: schemas.ArticleCreate, db: Session = Depends(get_db)):
    return crud_article.create_article(db=db, article=article)


@router.get("/articles/update/", response_model=list[schemas.Article])
def get_articles_to_update(access_token: Annotated[str | None, Cookie()] = None,
                           db: Session = Depends(get_db)):
    user = get_current_user(access_token, db)
    return crud_article.get_articles_by_user(db, user.id)


@router.get("/articles/", response_model=list[schemas.Article])
def get_articles(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    articles = crud_article.get_articles(db, skip=skip, limit=limit)
    return articles


@router.get("/articles/{article_id}/", response_model=schemas.Article)
def get_article(article_id: int, db: Session = Depends(get_db)):
    db_article = crud_article.get_article(db, article_id=article_id)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return db_article


@router.post("/articles/{article_id}/favorite/")
def favorite_article(article_id: int,
                     access_token: Annotated[str | None, Cookie()] = None,
                     db: Session = Depends(get_db)):
    article = crud_article.get_article(db, article_id=article_id)
    if article is None:
        raise HTTPException(status_code=400, detail="Article not found")
    user = get_current_user(access_token, db)
    crud_favorite.favorite_article(user.id, article.id, db)


@router.post("/articles/{article_id}/like/")
def like_article(article_id: int,
                 access_token: Annotated[str | None, Cookie()] = None,
                 db: Session = Depends(get_db)):
    article = crud_article.get_article(db, article_id=article_id)
    if article is None:
        raise HTTPException(status_code=400, detail="Article not found")
    user = get_current_user(access_token, db)
    crud_like.like_article(user.id, article.id, db)
