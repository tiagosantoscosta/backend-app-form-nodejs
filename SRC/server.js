const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8000; // Pega a porta do arquivo .env ou usa 8000 como padrão

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Para lidar com qualquer erro de inicialização do servidor
server.on('error', (error) => {
    console.error('Erro ao iniciar o servidor:', error);
});

