# 🚀 API REST - Projeto Desenvolvimento 2026

API REST completa com sistema de autenticação seguro, desenvolvida do zero com Node.js e TypeScript. O projeto implementa cadastro de usuários, login com geração de token JWT e rotas protegidas por middleware de autenticação.

## 🛠️ Tecnologias utilizadas

- **Node.js** + **TypeScript** — base do servidor
- **Express** — framework para criação das rotas
- **MySQL** + **Sequelize ORM** — banco de dados relacional
- **JWT (JSON Web Token)** — autenticação stateless
- **Bcrypt** — criptografia de senhas

## 📌 Rotas disponíveis

| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| POST | /api/register | Cadastro de usuário com senha criptografada | ❌ |
| POST | /api/login | Login e geração de token JWT | ❌ |
| GET | /api/perfil | Dados do usuário logado | ✅ |
| PUT | /api/user | Atualizar dados do usuário | ✅ |
| DELETE | /api/user | Deletar conta | ✅ |

## ▶️ Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- MySQL rodando localmente

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/jian2411150-byte/PROJETO-DESENVOLVIMENTO.git

# Entrar na pasta
cd PROJETO-DESENVOLVIMENTO

# Instalar dependências
npm install
```

### Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
PORT=3000
DB_HOST=localhost
DB_NAME=projetomodelo
DB_USER=root
DB_PASS=sua_senha
SECRET_KEY=sua_chave_secreta
```

### Rodar o servidor

```bash
npm run dev
```

## 🔐 Segurança

- Senhas criptografadas com **Bcrypt** antes de salvar no banco
- Autenticação via **JWT** com expiração de 30 dias
- Rotas protegidas por **Middleware** — o ID do usuário é extraído do token, nunca do body da requisição

## 👨‍💻 Autor

**Jian Lopes** — Desenvolvedor em formação

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jian-lopes-6a64a6200)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jian2411150-byte)