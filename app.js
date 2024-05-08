import tabela2024 from "./tabela.js";
import express from 'express';


const app = express();


app.listen(300, () => console.log('Server atuando na port 300'));

app.get('/', (req, res) => {
    res.send(tabela2024)
})