# Login com firebase!

O projeto de tarefas foi feito com react js e firebase. As rotas utilizam a biblioteca react-router-dom


## Firebase

O  Firebase é um conjunto de serviços de hospedagem para qualquer tipo de aplicativo. Oferece NoSQL e hospedagem em tempo real de bancos de dados, conteúdo, autenticação social e notificações ou serviços, como um servidor de comunicação em tempo real**

## CSS

No arquivo css, foi feita toda parte de estilização como a cor, background e flexbox. 

## Rotas

Para acessar a lista de tarefas, o usuário precisa estar logado, caso não esteja, não será possível, apagar, adicionar ou editar as tarefas. A rota para acessar às tarefas é privada, exigindo autenticação via firebase.

## Alerts e Validação	

Todos os inputs estão validados, ou seja, não será possível acessar às tarefas, caso não seja digitado e-mail e senha, não será possível adicionar tarefas, caso os inputs estejam em branco. Ao tentar acessar ou adicionar tarefas com inputs vazios um alert é emitido, comunicando ao usuário a falta de algum dado. Todos os alerts foram implementado utilizando o sweet alert: https://sweetalert.js.org/guides/

## Deploy

O deploy foi feito via linha de comando utilizando o netlify.
Para verificar o resultado do projeto, acesse o link: [https://tasksreact-firebase.netlify.app/](https://tasksreact-firebase.netlify.app/)

