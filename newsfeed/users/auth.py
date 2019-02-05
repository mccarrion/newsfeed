from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import GenericAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
from .serializers import RegisterSerializer


@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.DATA)
    if serializer.is_valid():
        User.objects.create_user(
            serializer.init_data['email'],
            serializer.init_data['username'],
            serializer.init_data['password']
        )
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer._errors, status=status.HTTP_400_BAD_REQUEST)

# class RegisterView(APIView):
#     permission_classes = (AllowAny,)
#     serializer_class = RegisterSerializer

#     def post(self, request):
#         user = request.data.get('user', {
#             "email": "",
#             "password": "",
#             "username": ""
#         })

#         serializer = self.serializer_class(data=user)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()

#         return Response(serializer.data, status=status.HTTP_201_CREATED)
