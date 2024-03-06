from sqlalchemy.orm import Session
from backend.db import db_like as model


def like_article(user_id: int, article_id: int, db: Session):
    db_like = db.query(model.Like).filter(model.Like.user_id == user_id,
                                          model.Like.article_id == article_id).first()
    if db_like is None:
        like = model.Like(user_id=user_id, article_id=article_id)
        db.add(like)
        db.commit()
        db.refresh(like)
        return like
    else:
        db.delete(db_like)
        db.commit()
