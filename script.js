const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res
        .header('Access-Control-Allow-Origin', '*')
        .header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        .header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.post('/submitForm', (req, res) => {
    const forma = req.body;
    console.log(forma);
    res.json({ success: true });
});

app.listen(port, () => console.log(`Сервер запущен по адресу: http://localhost:${port}`));
