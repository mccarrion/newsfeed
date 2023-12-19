from sqlalchemy.orm import Session
from newsfeed import models
from newsfeed.database import dbschema

def get_articles(db: Session):
    return db.query(dbschema.Article).all()

def create_article(db: Session, article: models.ArticleCreate):
    db_article = dbschema.Article()
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article