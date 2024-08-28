function ExperienceCard(item) {

    return (
        <>
            <div className="card-div">
                <img className="card-img" src={item.title_img} alt={alt_text} />
                <div className="card-text">
                    <h2>{ title }</h2>
                    <h3>{ role }</h3>
                    <h4>{ date }</h4>
                </div>
            </div>
        </>
    )

}

export default ExperienceCard;