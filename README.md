# 🚀 API REST - Projeto Desenvolvimento 2026

API REST completa com autenticação JWT desenvolvida com Node.js e TypeScript.

## 🛠️ Tecnologias
- Node.js
- TypeScript
- Express
- MySQL
- Sequelize ORM
- JWT (JSON Web Token)
- Bcrypt

## 📌 Rotas disponíveis

| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| POST | /api/register | Cadastro de usuário | ❌ |
| POST | /api/login | Login e geração de token | ❌ |
| GET | /api/perfil | Dados do usuário logado | ✅ |
| PUT | /api/user | Atualizar dados do usuário | ✅ |
| DELETE | /api/user | Deletar conta | ✅ |

## ▶️ Como rodar o projeto

```bash
# Instalar dependências
npm install

# Configurar o .env
cp .env.example .env

# Rodar o servidor
npm run dev
```

## 👨‍💻 Autor
Jian Lopes - [LinkedIn](https://www.linkedin.com/in/jian-lopes-6a64a6200)