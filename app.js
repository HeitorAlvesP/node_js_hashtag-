import tabela2024 from "./tabela.js";
import express from 'express';


const app = express();


app.listen(300, () => console.log('Server atuando na port 300'));

app.get('/', (req, res) => {
    res.send(tabela2024)
})

app.get('/:sigla', (req, res) => {

    const silga = req.params.sigla.toUpperCase();
    const time = tabela2024.find(infoTime => infoTime.sigla === silga)

    if( !time ) {
        res.status(404).send('Não está na nossa lista um time com essa sigla')
        return;
    }

    res.status(200).send(time)
})
