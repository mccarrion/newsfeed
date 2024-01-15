from passlib.context import CryptContext

# The secret key was created by running this command which was shared in FastAPI docs:
# openssl rand -hex 32
# TODO: the SECRET_KEY should be an environment variable rather than hardcoded
SECRET_KEY = "03e8bc3526b8b46b185cdff05059f2e53205ee4e6fb47f14b85fad4075120b76"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)
