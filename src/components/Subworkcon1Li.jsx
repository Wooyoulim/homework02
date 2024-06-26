const Subworkcon1Li = ({ item, ulChange }) => {
    const { id, title, bigurl, thumurl, desc } = item;
    return (
        <>
            <li key={id} onClick={() => ulChange(id)}>
                <img src={thumurl} alt={title} />
            </li>
        </>
    );
};

export default Subworkcon1Li;
