import CardFilme from "../../components/CardFilme"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import './home.css'

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function carregarFilmes() {
            const response = await api.get("/movie/now_playing", {
                params: {
                    language: "pt-BR",
                    page: 1,
                    api_key: 'cbed976b0481032e3e8a35e66be6cb7e'
                }
            })

            setFilmes(response.data.results.slice(0, 10));
        }

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