import "./index.scss";
import Cabecalho from "../../components/cabecalho";

import { useState } from 'react'

//chamar api
import axios from 'axios'

export default function App() {
    const [cards, setCards] = useState([])

    //Chamar api
    async function listarCards() {
        try {
            const resposta = await axios.get('http://localhost:3001/cards')
            setCards(resposta.data)

        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="pagina-app">
            <Cabecalho />

            <div className="secao">
                <button onClick={listarCards}>Adicionar</button>
                <h1 className="titulo"> Conteúdos </h1>

                <div className="cards">
                    {cards.map((item, index) => (
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
    );
}

export function Card({ titulo, status, descricao, data, trabalho }) {
    let corPrimaria = "#A3E5BA";
    let corSegundaria = "#EFFBE2";

    switch (status) {
        case "completo":
            corPrimaria = "#A3E5BA";
            corSegundaria = "#EFFBE2";
            break;

        case "em andamento":
            corPrimaria = "#DCA3E5";
            corSegundaria = "#EDE2FB";
            break;

        case "evento":
            corPrimaria = "#F6E448";
            corSegundaria = "#FAF4C1";
            break;

        case "criado":
            corPrimaria = "#C3C3C3";
            corSegundaria = "#F2F2F2";
            break;

        default:
            corSegundaria = "#F2F2F2";
            break;
    }

    return (
        <div className="cards">
            <div className="card" style={{ backgroundColor: corSegundaria }}>
                <div
                    className="card-cabecalho"
                    style={{ backgroundColor: corPrimaria }}
                >
                    <h2>{titulo}</h2>
                </div>

                <div className="card-conteudo">
                    {descricao && (
                        <div>
                            <h3>Assuntos</h3>
                            <pre>{descricao}</pre>
                        </div>
                    )}
                </div>

                <div className="card-tags">
                    {data && <p className="tag"> {data} </p>}
                    {trabalho && <p className="entregar"> Entrega Trab.</p>}
                </div>
            </div>
        </div>
    );
}
