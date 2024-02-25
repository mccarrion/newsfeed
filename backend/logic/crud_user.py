from fastapi import HTTPException, status
from jose import jwt, JWTError
from sqlalchemy.orm import Session, lazyload

from backend.logic import security_logic
from backend.schema import user as schema
from backend.db import db_user as model
from backend.schema.token import TokenData


def get_users(db: Session):
    return db.query(model.User).all()


def get_user(db: Session, username: str):
    return db.query(model.User).filter(model.User.username == username).first()


def get_current_user(token: str, db: Session):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, security_logic.SECRET_KEY, algorithms=[security_logic.ALGORITHM])
        username: str = payload.get("uname")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


def create_user(db: Session, user: schema.UserCreate):
    hashed_password = security_logic.get_password_hash(user.password)
    db_user = model.User(username=user.username, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
