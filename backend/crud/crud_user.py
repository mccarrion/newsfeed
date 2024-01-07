from sqlalchemy.orm import Session
from backend.schema import user as schema
from backend.db import db_user as model


def get_users(db: Session):
    return db.query(model.User).all()


def create_user(db: Session, user: schema.UserCreate):
    db_user = model.User(email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user