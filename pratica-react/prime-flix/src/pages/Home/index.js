import CardFilme from "../../components/CardFilme"
import { useEffect, useState } from 'react'
import requisicao from "../../api";
import './home.css'

function Home() {
    const [filmes, setFilmes] = useState([]);

    async function carregarFilmes() {
        setFilmes(await requisicao("/now_playing?language=pt-BR&&page=1"));
    }

    useEffect(() => {
        carregarFilmes()
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