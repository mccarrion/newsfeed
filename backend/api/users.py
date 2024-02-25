from typing import Annotated

from fastapi import APIRouter, Cookie, Depends
from sqlalchemy.orm import Session

from ..logic.crud_user import get_current_user
from ..schema import user as models
from ..logic import crud_user as crud
from backend.db.config import get_db

router = APIRouter()


@router.post("/users/create/")
def create_user(user: models.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)


@router.get("/users/", response_model=list[models.User])
def get_users(db: Session = Depends(get_db)):
    users = crud.get_users(db)
    return users


@router.get("/users/me/", response_model=models.User)
def get_user_me(access_token: Annotated[str | None, Cookie()] = None,
                db: Session = Depends(get_db)):
    db_user = get_current_user(access_token, db)
    user = models.User(id=db_user.id, username=db_user.username)
    return user
