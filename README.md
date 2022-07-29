# LITERATURA CIRCULAR

<p align="center">
<img src="material/banner.gif" alt="logo do projeto Literatura Circular" width="500">
</p> <p align="center"> </p>
</h1></br>

## Projeto Final - {Reprograma} - ON 16

Projeto de conclusão do bootcamp de desenvolvimento Back-end da [{reprograma}](https://reprograma.com.br/) - Todas em Tech.

<p>

### :purple_heart: Informações básicas

Documentação disponível [neste link](https://literatura-circular.herokuapp.com/documentacao-literatura-circular/)
Aplicação disponível [neste link](https://literatura-circular.herokuapp.com/)
Veja os vídeos com execução das principais rotas [clicando aqui](https://drive.google.com/drive/folders/1gqnjEKAVJEysjDrzKHWgS3CDi-N-SR7p?usp=sharing)

### :purple_heart: Objetivos

Hoje, cerca de 95% dos municípios brasileiros têm bibliotecas públicas. São mais de 6 mil em todo Brasil. Todavia, grande parte destas bibliotecas **não possuem orçamento e tem um acervo muito pobre e desatualizado, com dificuldades de obter recursos para modificar a situação**.

Do outro lado da moeda, o mercado literário tem estado aquecido (apesar de suas dificuldades e problemas). A última Bienal do Livro de São Paulo (2022) **foi um recorde de vendas, com editoras declarando um faturamento 185% acima do resultado da última Bienal, em 2018**.

Nesse universo de leitores, muitos têm o costume de separar livros que não querem mais. Todavia, aí surge um desafio: qual destinação que pode ser dada àqueles exemplares? Alguns procuram vender online, outros dão para colegas e parentes e ainda outros procuram uma biblioteca que aceite doações.

Todavia, como já vimos, entrar em contato com as bibliotecas pode ser um desafio, assim como verificar quais livros elas estariam interessadas em ter no acervo. **Essa API, então, busca resolver esse problema, conectando DOADORES com livros que desejam doar e BIBLIOTECAS que desejam receber esses livros de doação.**

Esse projeto me move muito pois sou escritora desde que me lembro por gente. Livros sempre foram meus melhores amigos e, por isso, sou apaixonada pelo universo literário. Acredito que eles podem mudar muitas vidas, como mudaram a minha, e quero ajudar a garantir que eles cheguem nas mãos de todos, gratuitamente, através de bibliotecas. 

### :purple_heart: Funcionalidades

Existem 4 grandes grupos de dados nesta API, são eles: DOADORES, BIBLIOTECAS, LIVROS DISPONÍVEIS E LIVROS DESEJADOS.

> Doadores
- [x] O schema do cadastro de doadores na API deve conter: id (autogerado), nome, cidade, estado, email, senha e se ele está disposto a pagar pelo envio do livro (dispostoAPagar).
- [x] Com relação aos seus dados, os doadores devem ser capazes de: (i) criar sua conta; (ii) deletar sua conta, (iii) fazer login, (iv) atualizar os dados da conta.
- [x] Os dados dos doadores também podem ser (i) filtrados por doadores que aceitam pagar o frete e (ii) levantados a fim de mostrar todos os doadores cadastrado. 
  
> Livros disponíveis
- [x] Quando cadastram livros para doação, eles vão para o grupo de dados LIVROS DISPONÍVEIS.
- [x] O schema do cadastro de livros disponíveis na API deve conter: id (autogerado), titulo, autore, editora, genero, comentarios, emailDoDoador.
- [x] Com relação aos livros, os doadores devem ser capazes de: (i) cadastrar um livro para doação, (ii) atualizar os dados do livro cadastrado, (iii) deletar o livro cadastrado.
- [x] Os dados de livros disponíveis devem poder ser (i) filtrados por título, (ii) filtrados por gênero, (iii) filtrados por doador e (iv) levantados a fim de mostrar todos os livros disponíveis cadastrados.

> Bibliotecas
- [x] O schema de cadastro das bibliotecas na API deve conter: id (autogerado), nome, cidade, estado, email, senha e se ele está disposto a pagar pelo recebimento do livro e se é uma instituição pública ou privada.
- [x] Com relação aos seus dados, as bibliotecas devem ser capazes de: (i) criar sua conta, (ii) deletar sua conta, (iii) fazer login com sua conta, (iv) atualizar seus dados.
- [x] Os dados das bibliotecas também pode ser (i) filtrados por estado, (ii) filtrados por cidade, (iii) filtrados por bilbiotecas que aceitam pagar o frete, (iv) filtrados por ID, (v) levantados a fim de mostrar ser a instituição é pública ou privada, (gitvi) levantados a fim de mostrar todas as bibliotecas cadastradas.

> Livros desejados
- [x] Quando cadastram livros que desejam, eles vão para o grupo de dados LIVROS DESEJADOS.
- [x] O schema de cadastro dos livros desejados na API deve conter: id (autogerado), titulo, autore, editora, genero, email.
- [x] Com relação aos livros, os doadores devem ser capazes de: (i) cadastrar um livro, (ii) deletar m livro, (iii) atualizar o livro cadastrado.
- [x] Os dados de livros desejados devem poder ser: (i) filtrados por titulo, (ii) filtrados por genero, (iii) filtrados por biblioteca, (iv) levantados a fim de mostrar todos os livros desejados cadastrados.

### :purple_heart: Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/claraguta/On16-Literatura-Circular.git

# Entrar na pasta do repositório
$ cd On-16-Literatura-Circular

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

```
Caso esteja utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.

### :purple_heart: Tecnologias e pacotes utilizados
- Node.js
- MongoDB
- Git
- Mongo Atlas
- Heroku
- express
- nodemon
- dotenv-safe
- mongoose
- bcrypt
- jsonwebtoken
- jest
- swagger

### :purple_heart: Arquitetura


```
📁reprograma-capacitacaorefugiados
├── 📁node_modules
├── 📁src
│   ├── 📁controller
|       ├── 📄bibliotecaController.js
|       ├── 📄doadoresController.js
|       ├── 📄livrosDesejadosController.js
|       ├── 📄livrosDisponiveisController.js
|   ├── 📁database
|       ├── 📄mongooseConnect.json
│   ├── 📁models
|       ├── 📄bibliotecasModel.json
|       ├── 📄doadoresModel.json
|       ├── 📄livrosDesejadossModel.json
|       ├── 📄livrosDisponiveisModel.json
│   ├── 📁routes
│       ├── 📄bibliotecasRoutes.js
│       ├── 📄doadoresRoutes.js
|       ├── 📄livrosDesejadosRoutes.js
|       ├── 📄livrosDisponiveisRoutes.js
|   ├── app.js
├── 📁swagger
|   ├── 📄swagger_output.json
├── 📄.env
├── 📄.env.example 
├── 📄.eslintrc.json
├── 📄.gitignore
├── 📄package-lock.json
├── 📄package.json
├── 📄Procfile
├── 📄README.md
├── 📄server.js
├── 📄swagger.js
```

### :purple_heart: Rotas

| Doadores                                     |        |                   |
|----------------------------------------------|--------|-------------------|
| Filtrar   doadores que aceitam pagar o frete | GET    | /donors/payment   |
| Criar a conta   do doador                    | POST   | /donor            |
| Deletar a   conta do doador                  | DELETE | /donor/:id        |
| Fazer login do   doador                      | POST   | /donor/login      |
| Atualizar dados da conta do   doador         | PATCH  | /donor/update/:id |
| Mostrar todos   os doadores cadastrados      | GET    | /donors           |
|                                                 |        |                        |

| Livros Disponíveis                              |        |                        |
|-------------------------------------------------|--------|------------------------|
| Mostrar   todos os livros disponíveis para doar | GET    | /books/available       |
| Filtrar livros   disponíveis por título         | GET    | /books/available/title |
| Filtrar livros   disponíveis por genero         | GET    | /books/available/genre |
| Cadastrar   livro para doação                   | PUT    | /book/available        |
| Deletar livro   para doação                     | DELETE | /book/:id              |
| Atualizar   dados dos livros disponíveis        | PATCH  | /book/available/:id    |
| Filtrar livros   disponíveis por doador         | GET    | /books/donor           |


| Bibliotecas                                     
|-------------------------------------------------|--------|--------------------|
| Criar   conta da biblioteca                     | POST   | /library           |
| Deletar a   conta da biblioteca                 | DELETE | /library/:id       |
| Fazer login   como biblioteca                   | POST   | /library/login     |
| Atualizar os dados da conta da   biblioteca     | PATCH  | /library/:id       |
| Mostrar todas   as bibliotecas cadastradas      | GET    | /libraries         |
| Filtrar   bibliotecas por cidade                | GET    | /libraries/cities  |
| Filtrar   bibliotecas por estado                | GET    | /libraries/state   |
| Filtrar   bibliotecas que aceitam pagar o frete | GET    | /libraries/payment |
| Filtrar   bibliotecas pelo ID                   | GET    | /libraries/:id     |
| Filtrar bibliotecas públicas                    | GET    | /libraries/public  |

| Livros Desejados                     |
|--------------------------------------|--------|-------------------------|
| Cadastrar livro desejado             | POST   | /book/wished            |
| Deletar livro desejado               | DELETE | /books/wished/:id'      |
| Atualizar dados dos livros desejados | PATCH  | /book/wished/update/:id |
| Mostrar todos os livros desejados    | GET    | /books/wished           |
| Filtrar livros desejados por título  | GET    | /books/wished/title     |
| Filtrar livros desejados por genero  | GET    | /books/wished/genre     |
| Ver quais livros uma biblioteca quer | GET    | /books/wished/library   |

### :purple_heart: Contribua com o projeto!

1. Faça o fork do projeto;
2. Crie uma branch para realizar suas alterações: `git checkout -b nome-da-nova-branch`
3. Dê um commit as alterações feitas e abra um pull request :)

### A Desenvolvedora

Essa é minha primeira API desenvolvida totalmente do zero, como trabalho de conclusão do Bootcamp Todas em Tech, da Reprograma. Estou ansiosa para meus próximos desafios :)

<p align="center">
<img src="material/desenvolvedora.png" alt="banner com meu nome e minha foto" width="500">
</p> <p align="center"> </p>
</h1></br>

### :purple_heart: Fontes

- [Câmara Legislativa](https://www.camara.leg.br/noticias/601164-mesmo-com-mais-de-6-mil-bibliotecas-no-pais-brasileiros-ainda-tem-dificuldade-no-acesso-a-leitura/#:~:text=Existem%2C%20hoje%2C%206.057%20bibliotecas%20p%C3%BAblicas,95%25%20dos%20munic%C3%ADpios%20t%C3%AAm%20bibliotecas.)

- [PublishNews](https://www.publishnews.com.br/materias/2022/07/11/editoras-reportam-recordes-de-vendas-na-bienal-do-livro-de-sp)