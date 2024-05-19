const MainImg = ({ ...click }) => {
    const { id, imgurl, title, desc } = click;


    return (
        <div className="bigimg">
            <h2>{title}</h2>
            <img src={imgurl} alt={title} />
        </div>
    );
};

export default MainImg;
