import './styles.scss';
import data from '../assets/api/data';
import MainList from './MainList';
import { useState } from 'react';
import MainImg from './MainImg';
import MainText from './MainText';

const Mainwork = () => {
    const [click, setClick] = useState(data[0]);

    const clickChange = (id) => {
        setClick(data.find((item) => item.id === id));
    };

    return (
        <div className="wrap">
            <div className="bigview">
                <MainImg {...click} />
                <MainList data={data} clickChange={clickChange} />
            </div>
            <MainText {...click} />
        </div>
    );
};

export default Mainwork;
