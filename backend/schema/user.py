from pydantic import BaseModel

from .article import Article


class UserBase(BaseModel):
    email: str
    password: str


class UserCreate(UserBase):
    pass


class User(UserBase):
    id: int
    articles: list[Article] = []

    class Config:
        orm_mode = True
