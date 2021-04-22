# consumindoApi


Backend em node.js que irá receber um número de 1 a 100 em uma rota api e irá retornar ‘Fizz’ para os números múltiplos de três e ‘Buzz’ para os números múltiplos de cinco.
Para números que são múltiplos de três e cinco retornar ‘FizzBuzz'”. Para os demais números retorne o próprio número.

Além disso, o sistema deve guardar um histórico de chamadas do usuário (e-mail, número chamado e resultado obtido).

O sistema deve ter uma rota de histórico, onde possamos filtrar os resultados pela data, e-mail do usuário, número pesquisado e/ou resultado obtido.

# Como executar o projeto


```bash
# clonar repositório
git clone https://github.com/SanzioWesley/consumindoApi.git

# entrar na pasta do projeto consumindo-api
cd consumindoApi
npm install

Executar o comando `nodemon server`

criar um banco de dados com o nome dbConnection no mysql, mudar a senha no arquivo dbConnection.js pra senha local do mysql

Abrir outro terminal digitar o comando `config` e executar o arquivo com o comando `nodemon dbConnection` 
```
