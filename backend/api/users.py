from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..schema import user as models
from ..crud import crud_user as service
from backend.db.config import engine, get_db

router = APIRouter()


@router.post("/users/create/")
def create_user(user: models.UserCreate, db: Session = Depends(get_db)):
    return service.create_user(db=db, user=user)


@router.get("/users/", response_model=list[models.User])
def get_users(db: Session = Depends(get_db)):
    users = service.get_users(db)
    return users
