import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import './filme.css'

function Filme() {
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

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
            }).catch(() => {
                console.log("FILME NÃO ENCONTRADO");
                navigate("/", { replace: true });
            })
        }

        pegarFilme();

    }, [navigate, id])

    if (loading) {
        return (
            <h2 className="text-loading">Carregando filme...</h2>
        )
    }

    function salvarFilme() {
        const listaFilmes = localStorage.getItem("@primeFlix");

        const filmeSalvo = JSON.parse(listaFilmes) || [];

        const hasFilme = filmeSalvo.some(filmeGuardado => filmeGuardado.id === filme.id);
        
        if (hasFilme) {
            alert("ESSE FILME JÁ ESTÁ SALVO!");
            return;
        }

        filmeSalvo.push(filme);
        localStorage.setItem("@primeFlix", JSON.stringify(filmeSalvo));
        alert("FILME SALVO COM SUCESSO!");
    }

    return (
        <div className="div-filme">
            <h2>{filme.title}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="" />
            <p>Sinopse</p>
            <p>{filme.overview}</p>
            <p>Avaliação: {filme.vote_average.toFixed(1)} / 10</p>
            <div className="div-botoes">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} target="_blank" rel="noreferrer ">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme