import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

function Filme() {
    const [filme, setFilme] = useState({});
    const parametroUrl = useParams();

    useEffect(() => {
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