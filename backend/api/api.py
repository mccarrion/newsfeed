from fastapi import APIRouter

from . import articles, users

api_router = APIRouter()
api_router.include_router(articles.router)
api_router.include_router(users.router)