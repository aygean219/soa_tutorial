const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
const port = 80


app.use(express.json())

app.get('/auth', (req, res) => {
    res.send('auth-service')
})

app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email === 'admin' && password === 'admin') {
            const token = jwt.sign({ id: 'user._id' }, "your_jwt_secret", { expiresIn: '1h' });

            res.json({ message: 'Login successful', token });
        } else return res.status(401).json({ message: 'Invalid credentials' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
