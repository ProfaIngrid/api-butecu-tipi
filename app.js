//importa o módulo express para criar uma aplicação 
//web usando node


//a função require é semelhante ao import do react, ela serve
//para importar módulos para o projeto
const express = require('express');

//inicializa a aplicação express
const app = express();

//definindo a porta na qual o servidor irá rodar
const port = 3000;

const produtosRoutes = require('./routes/produtosRoutes');


app.use('/produtos', produtosRoutes);


//configuração de uma rota para raiz ('/') da aplicação
app.get('/', (req, res) => {
    //Resposta em formato de objeto JSON
    res.json({message: 'Oba! rodou :)'});
});

//inicializa o servidor na porta definida anteriormente
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});



//EXPLICAÇÃO SOBRE CRUD e seu significado:
/*
Create(post) --> insert
Read(get) --> select
Update(put)  --> update
Delete(delete)  --> delete
*/










