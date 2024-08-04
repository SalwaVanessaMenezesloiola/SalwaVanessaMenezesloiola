const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const saltRounds = 10; // Número de rounds para criptografia

let accounts = []; // Simulação de banco de dados

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Criptografe a senha
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Crie a nova conta com a senha criptografada
        const newAccount = { id: accounts.length + 1, username, email, password: hashedPassword };
        accounts.push(newAccount);

        res.status(201).json({ message: 'Conta criada com sucesso!', account: newAccount });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar a conta.', error });
    }
});

module.exports = router;
