# **BackendTS** 🎢💻

## **Rotas**

_👌 AS ROTAS SEMPRE TERÃO: **/api/v1/** 👌_

----
### **📍Rota de Criação de usuario:** --_/api/v1/user_

<br>

>💂‍♀️**CORPO DA REQUISIÇÃO:**
>    
>```json
>
>{
>	"name":"Example",
>	"email":"example@gmail.com",
>	"password":"123",
>}
>
>```

<br>

>🤯**CABEÇARIO DA REQUISIÇÃO:**
>
>**🤠NÃO PRECISA🤠**

<br>

>😋**RETORNO:**
>```json
>
>{
>	"user": {
>		"id": "6217b618b1d3e6fdfbfeb42b",
>		"name": "Example",
>		"email": "example@gmail.com",
>		"password": "$2b$04$Z1LLiJog5mFBOkiqPr5.gOF/jetRJ037CLIp3o1JIx4sbeqeHNCwa",
>		"create_at": "2022-02-24T16:45:12.378Z"
>	}
>}
>
>```

---
### **📍Rota de Autenticação/login do usuario:** --_/api/v1/user_

<br>

>💂‍♀️**CORPO DA REQUISIÇÃO:**
>    
>```json
>
>{
>	"email":"example@gmail.com",
>	"password":"123"
>}
>
>```

<br>

>🤯**CABEÇARIO DA REQUISIÇÃO:**
>
>**🤠NÃO PRECISA🤠**

<br>

>😋**RETORNO:**
>```json
>
>{
> "user": {
>		"id": "6217b618b1d3e6fdfbfeb42b",
>		"name": "Example",
>		"email": "example@gmail.com",
>		"password": "$2b$04$Z1LLiJog5mFBOkiqPr5.gOF/jetRJ037CLIp3o1JIx4sbeqeHNCwa",
>		"create_at": "2022-02-24T16:45:12.378Z"
>	},
>	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxN2I2MThiMWQzZTZmZGZiZmViNDJiIiwiaWF0IjoxNjQ1NzIzNjU1LCJleHAiOjE2NDYzMjg0NTUsInN1YiI6IjYyMTdiNjE4YjFkM2U2ZmRmYmZlYjQyYiJ9.QnQid1IonxHVLySa541cRBwFdKFHm7sSpGbv-C8qnRA"
>}
>
>```
---


