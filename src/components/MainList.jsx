import MainItem from './MainItem';

const MainList = ({ main, clickChange }) => {
    return (
        <ul className="list">
            {main.map((item) => (
                <MainItem key={item.id} item={item} clickChange={clickChange} />
            ))}
        </ul>
    );
};

export default MainList;
