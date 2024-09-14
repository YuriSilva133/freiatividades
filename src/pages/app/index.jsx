import './index.scss'
import Cabecalho from '../../components/cabecalho'

//chamar api
//import axios from 'axios'

export default function App() {

    /*
    //Chamar api
    // async function listarCards() {
    //     const resposta = await axios.get('http://localhost:3001/cards')
    //     console.log(resposta.data);

    //     setCards(resposta.data)
    // }
    */

    let listaObjetos = [
        {
            'status': 'completo',
            'titulo': 'Componentes',
            'descricao': '- Objetos e Listas de Objetos - Componentes',
            'data': '26/agosto',
            'trabalho': false
        },
        {
            'status': 'em andamento',
            'titulo': 'Renderização e Efeito',
            'descricao': '- Componentes na renderização',
            'data': '2/setembro',
            'trabalho': false
        },
        {
            'status': 'criado',
            'titulo': 'Consumindo APIs - Parte 1',
            'descricao': '- Componentes na renderização.',
            'data': '9/setembro',
            'trabalho': true
        },
        {
            'status': 'evento',
            'titulo': 'Componentes',
            'descricao': '- Objetos e Listas de Objetos - Componentes',
            'data': '16/setembro',
            'trabalho': false
        }
    ]

    return (
        <div className='pagina-app'>
            <Cabecalho />

            <div className='secao'>
                <h1 className='titulo'> Conteúdos </h1>

                <div className='cards'>
                    {listaObjetos.map((item, index) => (
                        <Card
                            key={index}
                            titulo={item.titulo}
                            status={item.status}
                            descricao={item.descricao}
                            data={item.data}
                            trabalho={item.trabalho}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export function Card({ titulo, status, descricao, data, trabalho }) {

    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'

    switch (status) {
        case 'completo':
            corPrimaria = '#A3E5BA'
            corSegundaria = '#EFFBE2'
            break;

        case 'em andamento':
            corPrimaria = '#DCA3E5'
            corSegundaria = '#EDE2FB'
            break;

        case 'evento':
            corPrimaria = '#F6E448'
            corSegundaria = '#FAF4C1'
            break

        case 'criado':
            corPrimaria = '#C3C3C3'
            corSegundaria = '#F2F2F2'
            break

        default:
            corSegundaria = '#F2F2F2'
            break;
    }

    return (
        <div className='cards'>
            <div className='card' style={{ backgroundColor: corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                    <h2>{titulo}</h2>
                </div>

                <div className='card-conteudo'>
                    {descricao &&
                        <div>
                            <h3>Assuntos</h3>
                            <pre>
                                {descricao}
                            </pre>
                        </div>
                    }
                </div>

                <div className='card-tags'>
                    {data && <p className='tag'> {data} </p>}
                    {trabalho && <p className='entregar'> Entrega Trab.</p>}
                </div>
            </div>
        </div>
    )
}