const express = require('express');

const router = express.Router();


router.get('/', (request, response) => response.status(200).send('Olá, Mundo!'));
router.use(express.json());
router.post('/user/save', (req, res) => {
    // Aqui você pode adicionar a lógica para salvar o usuário
    // Por exemplo, você pode extrair os dados do usuário do corpo da requisição (req.body)
    // e então salvar esses dados no banco de dados
  
    // Não se esqueça de enviar uma resposta quando terminar
    res.send('Usuário salvo com sucesso!');
  });



module.exports = router;