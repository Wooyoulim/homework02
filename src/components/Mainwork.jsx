import './styles.scss';
import { main } from '../assets/api/data';
import MainList from './MainList';
import { useState } from 'react';
import MainImg from './MainImg';
import MainText from './MainText';

const Mainwork = () => {
    const [click, setClick] = useState(main[0]);

    const clickChange = (id) => {
        setClick(main.find((item) => item.id === id));
    };

    return (
        <div className="wrap">
            <div className="bigview">
                <MainImg {...click} />
                <MainList main={main} clickChange={clickChange} />
            </div>
            <MainText {...click} />
        </div>
    );
};

export default Mainwork;
