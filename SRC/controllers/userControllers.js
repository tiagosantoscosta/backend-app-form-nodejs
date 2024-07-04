const connection = require('../models/connection');



exports.saveUser = async (req, res) => {
    // Extraia os dados do usuário do corpo da requisição
    const { name, email, message } = req.body;

    try {
        // Insira os dados na tabela users
        await connection.query(
            'INSERT INTO users (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );

        res.send('Usuário salvo com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao salvar o usuário.');
    }
};


exports.listUser = async (req, res) => {
    try {
        // Busque os dados da tabela users
        const [rows, fields] = await connection.query(
            'SELECT * FROM users'
        );

        // Envie os dados como resposta
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao buscar os usuários.');
    }
};

