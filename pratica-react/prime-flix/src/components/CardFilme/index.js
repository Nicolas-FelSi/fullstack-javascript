function CardFilme(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <img src={props.poster_path} alt={`poster filme ${props.title}`} />
                <a href="">Acessar</a>
            </div>
        </div>
    )
}

export default CardFilme