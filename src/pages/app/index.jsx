import './index.scss'
import Cabecalho from '../../components/cabecalho'

export default function App() {
    return (
        <div className='pagina-app'>
            <Cabecalho />

            <div className='secao'>
                <h1 className='titulo'> Conteúdos </h1>

                <div className='cards'>
                    <Card 
                        status = 'completo'
                        titulo = 'Componentes'
                        assunto = 'Assuntos'
                        descricao = '- Objetos e Listas de Objetos - Componentes'
                        data = '26/agosto' 
                        entregar= 'sim'
                    />

                    <Card 
                        status = 'Em andamento'
                        titulo = 'Componentes'
                        assunto = 'Assuntos'
                        descricao = '- Objetos e Listas de Objetos - Componentes'
                        data = '26/agosto' 
                        entregar= 'sim'
                    />

                    <Card 
                        status = 'Criado'
                        titulo = 'Componentes'
                        assunto = 'Assuntos'
                        descricao = '- Objetos e Listas de Objetos - Componentes'
                        data = '26/agosto' 
                        entregar= 'sim'
                    />

                    <Card 
                        status = 'evento'
                        titulo = 'Componentes'
                        assunto = 'Assuntos'
                        descricao = '- Objetos e Listas de Objetos - Componentes'
                        data = '26/agosto' 
                        entregar= 'sim'
                    />

                </div>
            </div>
        </div>
    )

}

export function Card(props) {

    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'

    return (
        <div className='cards'>
            <div className='card' style={{ backgroundColor: corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                    <h2>{props.titulo}</h2>
                </div>
                <div className='card-conteudo'>
                    <h3>{props.assunto}</h3>

                    <pre>
                        {props.descricao}
                    </pre>
                </div>

                <div className='card-tags'>
                    <p className='tag'>{props.data}</p>

                    {props.entregar === 'sim' &&
                        <p className='entregar'> Entrega Trab.</p>
                    }
                </div>
            </div>
        </div>
    )
}
