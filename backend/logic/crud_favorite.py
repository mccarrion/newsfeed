from sqlalchemy.orm import Session
from backend.db import db_favorite as model


def favorite_article(user_id: int, article_id: int, db: Session):
    db_favorite = db.query(model.Favorite).filter(model.Favorite.user_id == user_id,
                                                      model.Favorite.article_id == article_id).first()
    if db_favorite is None:
        favorite = model.Favorite(user_id=user_id, article_id=article_id)
        db.add(favorite)
        db.commit()
        db.refresh(favorite)
        return favorite
    else:
        db.delete(db_favorite)
        db.commit()
