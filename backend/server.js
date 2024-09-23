import express from 'express';
import cors from 'cors';

const servidor = express()
const port = 3001

servidor.use(express.json())
servidor.use(cors())

servidor.get('/cards', (req, res) => {
    let cards = [
        {
            titulo: 'Componentes',
            descricao: '- Objetos e Listas de Objetos',
            data: '01/jan',
            status: 'em andamento',
            trabalho: true
        },
        {
            titulo: 'Componentes',
            descricao: '- Objetos e Listas de Objetos',
            data: '02/jan',
            status: 'completo',
            trabalho: true
        },
        {
            titulo: 'Componentes',
            descricao: '- Objetos e Listas de Objetos',
            data: '03/jan',
            status: 'evento',
            trabalho: false
        }
    ]

    res.send(cards)
})

servidor.listen(port, () => console.log(`API ouvindo na porta ${port}`));