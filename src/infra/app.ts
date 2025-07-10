import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('feito com sucesso!');
});

const server = app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// Para parar o servidor, pode chamar:
// server.close();
