# DesafioAngular

[- Informações técnicas do Angluar](#angular-information)   
[- Descrição do desafio](#descrição-do-desafio)  
[- Resultado](#resultado)  


## Descrição do desafio
28/12 - 31/12/2019   
Estudamos as noções básicas de Angular com o curso Desenvolverdor SPA com Angular. 
Instrutor Eduardo Pires.

04/01 - 08/01/2020   
Desenvolvemos as técnicas aprendidas na elaboração do exercício proposto.

### Login

<img src="https://git.gft.com/gege/desafio-angular/-/raw/8038decc32d7334a46e977c55f642c358eacd46a/Readme-img/login1.png" width="600">
<img src="https://git.gft.com/gege/desafio-angular/-/raw/8038decc32d7334a46e977c55f642c358eacd46a/Readme-img/login2.png" width="600">
<img src="https://git.gft.com/gege/desafio-angular/-/raw/8038decc32d7334a46e977c55f642c358eacd46a/Readme-img/login3.png" width="600">
<img src="https://git.gft.com/gege/desafio-angular/-/raw/8038decc32d7334a46e977c55f642c358eacd46a/Readme-img/login4.png" width="600">


- [X] A tela principal deve ser um "fake login", utilizando reactive forms (formgroup / formbuilder) ou template driven forms (ngForm) (?) reactive forms x template driven forms 
- [X] O campos do formulário de login tem preenchimento obrigatório 
- [X] Deve existir feedback para o usuário caso preencha o campo incorretamente ou não preencha o campo obrigatório ao sair do campo (?) material forms 
- [X] O botão entrar deve permanecer inativo até que o formulário seja válido 
- [X] Colocar um hover mais claro no botão de entrar 
- [X] Após clicar em entrar e caso o formulário seja válido, direcionar o usuario para a lista de usuários 
- [ ] Utilizar localstorage para salvar se o usuario está logado ou não 

### Usuários
<img src="https://git.gft.com/gege/desafio-angular/-/raw/8038decc32d7334a46e977c55f642c358eacd46a/Readme-img/Usuarios.png" width="600">


- [X] Api que lista os usuários https://jsonplaceholder.typicode.com/users 
- [X] Utilizar o tabela do material https://material.angular.io/components/table/overview 
- [X] Mostrar na tabela APENAS as colunas name, username, email da api de usuarios 
- [X] Incluir paginação 
- [X] Incluir input com filtro 
- [ ] O usuário só podera acessar essa pagina se estiver logado, senão redirecionar para o login 

PLUS 

- [X] Incluir uma coluna chamada ações com o botão de lupa que abrirá uma modal/dialog com todas as informações do usuário selecionado 
(sem fazer uma nova requisição na api, passando para a modal atraves do atributo data) (?) https://material.angular.io/components/dialog/overview 
- [X] Incluir ordenação nas colunas da tabela 
- [ ] Loading na pagina até trazer os dados da tabela 

### Fotos
<img src="https://git.gft.com/gege/desafio-angular/-/raw/8038decc32d7334a46e977c55f642c358eacd46a/Readme-img/Fotos.png" width="600">

- [X] Api que lista as fotos https://jsonplaceholder.typicode.com/photos 
- [X] Criar cards com a imagem e o titulo da foto 
- [X] Colocar algum efeito css no hover do card ou da imagem 
- [X] Colocar paginação 
- [ ] O usuário só podera acessar essa pagina se estiver logado, senão redirecionar para o login 

PLUS 
- [?] Criar um componente para o card 

---
## Resultado

em processo ...


---

## Angular Information  
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
