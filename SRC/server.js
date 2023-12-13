const app = require('./app');
require('dotenv').config();





 


const PORT =  process.env.PORT || 8000; // a porta que você mencionou
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
