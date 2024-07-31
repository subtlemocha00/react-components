const Card = ({ title, text, imageUrl, buttonText, buttonLink, height, width }) => {
    return (
        <div className="card col-3 p-0 m-2">
            <img className="card-img-top w-auto" src={imageUrl} alt="image here" height={height} width={width}></img>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
                <a className="btn btn-dark" src={buttonLink}>{buttonText}</a>
            </div>
        </div>
    )
}

export default Card;