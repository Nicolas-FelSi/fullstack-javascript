import CardFilme from "../../components/CardFilme"
import { useEffect, useState } from 'react'
import { opcoes, urlPadrao } from "../../api";
import './home.css'

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        fetch(`${urlPadrao}/now_playing`, opcoes).then(response => response.json()).then(dados => setFilmes(dados.results));

    }, [])   

    return (
        <div className="listaFilmes">
            {filmes.map(filme => {
                return (
                    <CardFilme 
                        key={filme.id}
                        title={filme.title}
                        poster_path={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                        id={filme.id}
                    />
                )
            })}
        </div>
    )
}

export default Home