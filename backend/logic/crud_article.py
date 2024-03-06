from sqlalchemy.orm import Session, joinedload
from backend.schema import article as schema
from backend.db import db_article, db_favorite, db_like, db_user


def get_articles(user: db_user, db: Session, skip: int = 0, limit: int = 100):
    if user is None:
        return db.query(db_article.Article).offset(skip).limit(limit).all()
    else:
        articles = (db.query(db_article.Article)
                    .options(joinedload(db_article.Article.favorites.and_(db_favorite.Favorite.user_id == user.id)))
                    .options(joinedload(db_article.Article.likes.and_(db_like.Like.user_id == user.id)))
                    .offset(skip).limit(limit).all())
        return articles


def get_article(db: Session, article_id: int):
    return db.query(db_article.Article).filter(db_article.Article.id == article_id).first()


def get_articles_by_user(db: Session, creator_id: int, skip: int = 0, limit: int = 100):
    return db.query(db_article.Article).filter(db_article.Article.creator_id == creator_id).offset(skip).limit(
        limit).all()


def create_article(db: Session, article: schema.ArticleCreate):
    record = db_article.Article(title=article.title, body=article.body, creator_id=article.creator_id)
    db.add(record)
    db.commit()
    db.refresh(record)
    return record
