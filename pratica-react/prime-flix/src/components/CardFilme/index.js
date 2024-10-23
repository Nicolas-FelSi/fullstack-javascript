import './cardFilme.css'

function CardFilme({ title, poster_path, id }) {
    return (
        <div className='card-filme'>
            <h2>{title}</h2>
            <div className="div-image">
                <img src={poster_path} alt={`poster filme ${title}`} />
                <a href={`/filme/${id}`}>Acessar</a>
            </div>
        </div>
    )
}

export default CardFilme