import { Link } from 'react-router-dom'
import './erro.css'

function Erro() {
    return (
        <div className='not-found'>
            <h2>404</h2>
            <p>Página não encontrada!</p>
            <Link to="/">Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro;