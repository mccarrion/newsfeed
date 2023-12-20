from sqlalchemy.orm import Session
from backend.schema import user as models
from backend.db import db_user as dbschema


def get_users(db: Session):
    return db.query(dbschema.User).all()


def create_user(db: Session, user: models.UserCreate):
    db_user = dbschema.User(username=user.username, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user