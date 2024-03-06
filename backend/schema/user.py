from pydantic import BaseModel

from .article import Article


class UserBase(BaseModel):
    username: str


class UserCreate(UserBase):
    password: str
    pass


class User(UserBase):
    id: int
    articles: list[Article] = []

    class Config:
        orm_mode = True
