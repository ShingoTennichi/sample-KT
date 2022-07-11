import '../CSS/Card.css';

type CardProps = {
    path: string,
    imageName: string,
    title?: string,
    article?: string
}

function Card({path, imageName, title, article}: CardProps): JSX.Element {
    return(
        <li className="card-frame">
            <div className="card-image">
                <img src={path} alt={imageName}></img>
            </div>
            <article className="card-article-frame">
                <h3 className='title'>{title}</h3>
                <p className='article'>{article}</p>
            </article>
            <span className='adjust-margin'></span>
        </li>
    )
}

export default Card;