import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './filme.css'

function Filme() {
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function pegarFilme() {
            await api.get('/movie/' + id, {
                params: {
                    api_key: 'cbed976b0481032e3e8a35e66be6cb7e',
                    language: 'pt-BR'
                }
            }).then(response => {
                setFilme(response.data)
                setLoading(false);
            }).catch(() => console.log("FILME NÃO ENCONTRADO"))
        }

        pegarFilme();

    }, [])

    if (loading) {
        return (
            <h2>Carregando filme...</h2>
        )
    }


    return (
        <div className="div-filme">
            <h2>{filme.title}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="" />
            <p>Sinopse</p>
            <p>{filme.overview}</p>
            <p>Avaliação: {filme.vote_average.toFixed(1)} / 10</p>
            <div className="div-botoes">
                <button>Salvar</button>
                <button>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme