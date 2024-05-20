import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Subworkcon1PageDt = ({ id, title, desc, isShow, ul, ulChange }) => {
    return (
        <>
            <dt onClick={() => ulChange(id)} className={id === ul.id ? 'on' : ''}>
                {title}
                {isShow ? <FaChevronUp /> : <FaChevronDown />}
                <span className={id === ul.id ? 'on' : ''}></span>
            </dt>
            <dd className={id === ul.id ? 'on' : ''}>{desc}</dd>
        </>
    );
};

export default Subworkcon1PageDt;
