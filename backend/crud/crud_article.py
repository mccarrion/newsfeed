from sqlalchemy.orm import Session
from backend.schema import article as models
from backend.db import db_article as dbschema


def get_articles(db: Session):
    return db.query(dbschema.Article).all()


def create_article(db: Session, article: models.ArticleCreate):
    db_article = dbschema.Article(title=article.title, body=article.body, creator_id=article.creator_id)
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article
