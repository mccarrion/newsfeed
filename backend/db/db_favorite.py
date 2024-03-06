from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from backend.db.config import Base


class Favorite(Base):
    __tablename__ = "favorites"

    id = Column(Integer, primary_key=True, index=True) # TODO change this to UUID
    user_id = Column(Integer, ForeignKey("users.id"))
    article_id = Column(Integer, ForeignKey("articles.id"))

    article = relationship("Article", back_populates="favorites")
