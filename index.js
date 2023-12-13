const express = require('express');
const app = express();


app.use(express.json());
app.post('/user/save', (req, res) => {
    // Aqui você pode adicionar a lógica para salvar o usuário
    // Por exemplo, você pode extrair os dados do usuário do corpo da requisição (req.body)
    // e então salvar esses dados no banco de dados
  
    // Não se esqueça de enviar uma resposta quando terminar
    res.send('Usuário salvo com sucesso!');
  });


const port = 8000; // a porta que você mencionou
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
