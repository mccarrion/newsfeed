from datetime import timedelta
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from ..logic.security_logic import authenticate_user, ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token
from backend.db.config import get_db
from ..schema.token import Token

router = APIRouter()


@router.post("/token")
def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
          db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"uname": user.username, "id": user.id}, expires_delta=access_token_expires
    )
    json_token = jsonable_encoder(Token(access_token=access_token, token_type="bearer"))
    # TODO: Set-Cookie for access_token should also be Secure to limit it to SSL connection only
    headers = {"Set-Cookie": "access_token=" + access_token + "; HttpOnly"}
    return JSONResponse(content=json_token, headers=headers)
