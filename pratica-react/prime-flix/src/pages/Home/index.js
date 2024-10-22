import CardFilme from "../../components/CardFilme"
import { useEffect, useState } from 'react'

function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

    }, [setFilmes])

    return (
        <div>
            { }
            <CardFilme />
        </div>
    )
}

export default Home