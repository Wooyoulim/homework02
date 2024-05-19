import Subworkcon1Li from './Subworkcon1Li';

const Subworkcon1List = ({ con1, ulChange }) => {
    return (
        <ul className="mainList">
            {con1.map((item) => (
                <Subworkcon1Li key={item.id} item={item} ulChange={ulChange} />
            ))}
        </ul>
    );
};

export default Subworkcon1List;
