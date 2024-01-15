from sqlalchemy.orm import Session

from backend.logic.security_logic import get_password_hash
from backend.schema import user as schema
from backend.db import db_user as model


def get_users(db: Session):
    return db.query(model.User).all()


def get_user(db: Session, username: str):
    return db.query(model.User).filter(model.User.username == username).first()


def create_user(db: Session, user: schema.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = model.User(username=user.username, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
