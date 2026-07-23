SiNutre

Projeto Final da "Formação em Desenvolvimento Web Moderno".

O projeto foi desenvolvido a partir do MVP SiNutre disponibilizado durante o curso, tendo como objetivo implementar melhorias e novas funcionalidades conforme os requisitos complementares propostos na atividade final.


Aplicação em Produção

Frontend (Vercel)

https://sinutre-frontend-eight.vercel.app

Backend (Railway)

https://sinutre-backend-production-37d9.up.railway.app



Repositórios

Frontend

https://github.com/Julena1809/sinutre-frontend

Backend

https://github.com/Julena1809/sinutre-backend



Tecnologias Utilizadas

Backend

Node.js
TypeScript
Express
Prisma ORM
SQLite
JWT
GitHub OAuth

Frontend

React
TypeScript
Vite
Tailwind CSS
DaisyUI
Axios



Funcionalidades Implementadas

As funcionalidades abaixo foram desenvolvidas sobre o MVP disponibilizado durante o curso.

Alteração de alimentos

Foi implementada a funcionalidade de edição dos alimentos cadastrados pelo usuário, permitindo alterar:

Nome;
Calorias por 100g;
Carboidratos por 100g;
Proteínas por 100g;
Gorduras por 100g.

Requisito Complementares implementados 

Exclusão de alimentos

Foi implementada a funcionalidade de exclusão de alimentos cadastrados pelo usuário autenticado, incluindo confirmação antes da remoção do registro.

Validação de dados

Foram implementadas validações durante o cadastro e alteração dos alimentos, contemplando:

obrigatoriedade dos campos;
conversão dos valores numéricos;
prevenção de envio de valores inválidos;
tratamento de erros retornados pela API.

Logout

Foi implementado um botão de logout que:

encerra a sessão do usuário;
remove o token JWT armazenado;
redireciona automaticamente para a tela inicial de autenticação.

Personalização da Interface

Foi realizada a personalização da identidade visual da aplicação através da alteração do tema e das cores utilizando DaisyUI.

Funcionalidades do MVP Utilizadas

Além das melhorias implementadas neste projeto, foram preservadas e utilizadas as funcionalidades originalmente disponibilizadas no MVP do curso:
Autenticação utilizando GitHub OAuth;
Cadastro de alimentos;
Cadastro de refeições;
Dashboard nutricional;
Persistência dos dados utilizando Prisma ORM e SQLite;
Integração entre frontend e backend.

Requisitos Complementares Atendidos

| Ref. | Requisito | Status |
|------|-----------|:------:|
| 01 | Alterar alimento cadastrado | ✅ |
| 02 | Excluir alimento cadastrado | ✅ |
| 03 | Validação de dados no cadastro e alteração | ✅ |
| 11 | Implementação de Logout | ✅ |
| 12 | Alteração da identidade visual | ✅ |

Como Executar Localmente

Backend

bash
npm install

npm run dev


Frontend

bash
npm install

npm run dev




Autor

Elivaldo de Jesus Souza

Projeto desenvolvido como atividade avaliativa da **Formação em Desenvolvimento Web Moderno**, implementando melhorias sobre o MVP disponibilizado durante o curso.
