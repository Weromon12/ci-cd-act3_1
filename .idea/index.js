// archivo index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hola Mundo desde Node.js'));
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
