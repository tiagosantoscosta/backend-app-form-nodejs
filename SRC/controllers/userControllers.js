const connection = require('../models/connection');



exports.saveUser = async (req, res) => {
    const { id, name, email, message } = req.body;
    console.log(req.body);

    try {
        if (id) {
            // Atualiza os dados do usuário existente
            const [result] = await connection.query(
                'UPDATE users SET name = ?, email = ?, message = ? WHERE id = ?',
                [name, email, message, id]
            );

            if (result.affectedRows === 0) {
                return res.status(404).send('Usuário não encontrado.');
            }

            res.send('Usuário atualizado com sucesso!');
        } else {
            // Insere novos dados do usuário
            await connection.query(
                'INSERT INTO users (name, email, message) VALUES (?, ?, ?)',
                [name, email, message]
            );

            res.send('Usuário salvo com sucesso!');
        }
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


exports.editUser = async (req, res) => {
    const userId = req.params.id; // Acessa o parâmetro da URL

    console.log('ID recebido:', userId);

    try {
        // Consulta SQL para buscar os dados do usuário com base no userId
        const [users] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
        // Como você está esperando apenas um usuário com um id específico, pegue o primeiro elemento do array
        const user = users[0];

        // Envie os dados do usuário como resposta
        res.json(user);
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        res.status(500).send('Ocorreu um erro ao buscar os dados do usuário.');
    }
};

