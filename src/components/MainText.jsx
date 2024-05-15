const MainText = ({ ...click }) => {
    const { id, imgurl, title, desc } = click;
    return (
        <div className="text">
            <strong>{title}</strong>
            <p>{desc}</p>
        </div>
    );
};

export default MainText;
