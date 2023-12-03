# desafio-Escribo-2

Segundo desafio Escribo

Cadastro (POST):
http://localhost:3001/user/signup
{
"name": "Nometeste",
"email": "email@teste",
"senha": "senhateste",
"telefone": "3100000000"
}
Login (POST);
http://localhost:3001/user/signin
{
"email": "emailtestecadastrado",
"senha": "senhatestecadastrada"
}

getByEmail :
Necessita de token de autorização no Header

http://localhost:3001/user/getbyemail
{
"email": "emailteste@cadastrado"
}

getById :
Necessita de token de autorização no Header

http://localhost:3001/user/substituapeloid

getAll :
Necessita de token de autorização no Header

http://localhost:3001/user

{
"email": "rafaelagg2@hotmail.com"
}
