import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import requisicao from "../../api";

function Filme() {
    const [filme, setFilme] = useState({});
    const parametroUrl = useParams();

    async function carregarFilme() {
        setFilme(requisicao("/" + parametroUrl.id));
    }

    useEffect(() => {
        carregarFilme()
    }, [])

    if (filme) {
        return (
            <div>
                <h2>{filme.title}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <p>Filme não encontrado</p>
            </div>
        )
    }
}

export default Filme