from sqlalchemy.orm import Session
from backend.schema import article as schema
from backend.db import db_article as model


def get_articles(db: Session, skip: int = 0, limit: int = 100):
    return db.query(model.Article).offset(skip).limit(limit).all()


def get_article(db: Session, article_id: int):
    return db.query(model.Article).filter(model.Article.id == article_id).first()


def create_article(db: Session, article: schema.ArticleCreate):
    db_article = model.Article(title=article.title, body=article.body, creator_id=article.creator_id)
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article
