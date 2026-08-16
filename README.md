# Plante Vagas

Plataforma que conecta candidatos e empresas do agronegócio, com currículo especializado no setor, vagas, processo seletivo e gestão de perfil.

Monorepo com duas aplicações:

- **`client/`** — front-end em React + TypeScript + Vite + Tailwind
- **`server/`** — back-end em NestJS + Prisma + PostgreSQL

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (instalado junto com o Node)
- Acesso a um banco PostgreSQL (o projeto usa [Supabase](https://supabase.com/); peça as credenciais do `.env` a alguém do time ou crie seu próprio projeto Supabase)

## 🚀 Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone git@github.com:MaJuks/plante-vagas.git
cd plante-vagas
```

### 2. Configurar variáveis de ambiente do back-end

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp server/.env.example server/.env
```

Variáveis necessárias em `server/.env`:

| Variável | Descrição |
| --- | --- |
| `DATABASE_URL` | Connection string do PostgreSQL (via pooler) |
| `DIRECT_URL` | Connection string direta do PostgreSQL (usada pelas migrations) |
| `JWT_SECRET` | Segredo para assinar o access token |
| `JWT_REFRESH_SECRET` | Segredo para assinar o refresh token |
| `OPENAI_API_KEY` | Chave da OpenAI (usada na importação de currículo em PDF) |

### 3. Instalar as dependências

Na raiz do projeto:

```bash
npm install        # instala o concurrently, usado para subir client + server juntos
npm run install:all # instala as dependências de client/ e server/
```

### 4. Preparar o banco de dados

Dentro de `server/`, gere o Prisma Client e aplique as migrations:

```bash
cd server
npx prisma generate
npx prisma migrate deploy
cd ..
```

### 5. Subir o projeto

Na raiz, um único comando sobe front-end e back-end juntos (com logs prefixados `[server]`/`[client]`):

```bash
npm run dev
```

- Back-end (NestJS): http://localhost:3000
- Front-end (Vite): http://localhost:5173

Se preferir rodar cada aplicação separadamente:

```bash
npm run dev:server   # só o back-end
npm run dev:client   # só o front-end
```

Ou entrando em cada pasta manualmente:

```bash
cd server && npm run start:dev
cd client && npm run dev
```

## 🧪 Testes

```bash
cd server
npm run test       # testes unitários
npm run test:e2e   # testes end-to-end
npm run test:cov   # cobertura
```

## 🏗️ Build de produção

```bash
# back-end
cd server
npm run build
npm run start:prod

# front-end
cd client
npm run build
npm run preview
```

## 🗄️ Prisma — comandos úteis

Executados de dentro de `server/`:

```bash
npx prisma studio           # abre um painel visual do banco
npx prisma migrate dev      # cria e aplica uma nova migration em ambiente de dev
npx prisma migrate deploy   # aplica migrations pendentes (sem gerar novas)
npx prisma generate         # regenera o Prisma Client após mudar o schema
```
