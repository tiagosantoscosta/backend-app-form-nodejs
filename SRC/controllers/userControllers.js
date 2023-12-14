const connection = require('../models/connection');

console.log(process.env.MYSQL_HOST);
 console.log(process.env.MYSQL_USER);
 console.log(process.env.MYSQL_PASSWORD);
 console.log(process.env.MYSQL_DATABASE);
 console.log('test',process.env.MYSQL_PORT);
 

 exports.saveUser = async (req, res) => {
    // Extraia os dados do usuário do corpo da requisição
    const { name, email, message } = req.body;

    try {
        // Insira os dados na tabela users
        await connection.query(
            'INSERT INTO users (usuario, email, mensagem) VALUES (?, ?, ?)',
            [name, email, message]  
        );

        res.send('Usuário salvo com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao salvar o usuário.');
    }
};

