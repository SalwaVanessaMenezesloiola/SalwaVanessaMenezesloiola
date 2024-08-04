import express, { json } from 'express';
const app = express();
const port = 3000;

app.use(json());

import accountsRouter from './routes/accounts';
app.use('/accounts', accountsRouter);

app.get('/', (req, res) => {
    res.send('Bem-vindo ao Silenced Voices!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
