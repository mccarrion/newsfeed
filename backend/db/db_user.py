from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from backend.db.config import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True) # TODO change this to UUID
    email = Column(String)
    password = Column(String)

    articles = relationship("Article", back_populates="creator")