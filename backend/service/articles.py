from sqlalchemy.orm import Session
from backend.models import articles as models
from backend.database import article_schema as dbschema


def get_articles(db: Session):
    return db.query(dbschema.Article).all()


def create_article(db: Session, article: models.ArticleCreate):
    db_article = dbschema.Article(title=article.title, body=article.body)
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article