import { useEffect } from "react"
import { useParams } from 'react-router-dom'

function Filme() {
    const id = useParams();
    
    useEffect(() => {
        console.log(id)
    }, [])

    return(
        <div>

        </div>
    )
}

export default Filme