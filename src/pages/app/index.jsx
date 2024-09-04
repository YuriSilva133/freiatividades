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
                        entregar= 'não'
                    />

                    <Card 
                        status = 'em andamento'
                        titulo = 'Renderização e Efeito'
                        assunto = 'Assuntos'
                        descricao = '- Componentes na renderização.'
                        data = '2/setembro' 
                        entregar= 'não'
                    />

                    <Card 
                        status = 'criado'
                        titulo = 'Consumindo APIs - Parte 1'
                        assunto = 'Assuntos'
                        descricao = '- Componentes na renderização.'
                        data = '9/setembro' 
                        entregar= 'sim' 
                    />

                    <Card 
                        status = 'evento'
                        titulo = 'Componentes'
                        assunto = 'Assuntos'
                        descricao = '- Objetos e Listas de Objetos - Componentes'
                        data = '16/setembro' 
                        entregar= 'não'
                    />
                    
                    <Card/>
                </div>
            </div>
        </div>
    )

}

export function Card(props) {
    let corPrimaria = ''
    let corSegundaria = ''

    if (props.status === 'completo') {
        corPrimaria = '#A3E5BA'
        corSegundaria = '#EFFBE2'
    }
    else if (props.status === 'em andamento') {
        corPrimaria = '#DCA3E5'
        corSegundaria = '#EDE2FB'
    }
    else if (props.status === 'criado') {
        corPrimaria = '#C3C3C3'
        corSegundaria = '#F2F2F2'
    }
    else if (props.status === 'evento') {
        corPrimaria = '#F6E448'
        corSegundaria = '#FAF4C1'
    }
    
    return (
        <div className='cards'>
            <div className='card' style={{ backgroundColor: corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                    <h2>{props.titulo}</h2>
                </div>
                <div className='card-conteudo'>
                    <h3>{props.assunto}</h3>

                    <pre style={{ whiteSpace: 'pre-line' }}>
                        {props.descricao}
                    </pre>
                </div>

                <div className='card-tags'>
                    {props.data &&
                        <p className='tag'>{props.data}</p>
                    }

                    {props.entregar === 'sim' &&
                        <p className='entregar'> Entrega Trab.</p>
                    }
                </div>
            </div>
        </div>
    )
}
