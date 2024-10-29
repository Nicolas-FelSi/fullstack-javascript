import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './favorito.css'

function Favorito() {
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        const listaFilmes = localStorage.getItem("@primeFlix");
        setFilme(JSON.parse(listaFilmes) || []);
    }, [])
    
    return(
        <div className='div-meusFilmes'>
            <h2>Meus filmes</h2>
            <ul>
                {filme.map(item => {
                    return(
                        <li>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorito;