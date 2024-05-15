import MainItem from './MainItem';

const MainList = ({ data, clickChange }) => {
    return (
        <ul className="list">
            {data.map((item) => (
                <MainItem key={item.id} item={item} clickChange={clickChange} />
            ))}
        </ul>
    );
};

export default MainList;
