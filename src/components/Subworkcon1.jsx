import { MdOutlineNavigateNext, MdNavigateBefore } from 'react-icons/md';
import Subworkcon1List from './Subworkcon1List';
import Subworkcon1Page from './Subworkcon1Page';
import { con1 } from './../assets/api/data';
import { useState } from 'react';
import './subwork.scss';
const Subworkcon1 = () => {
    const [data, setData] = useState(con1);
    const [ul, setUl] = useState(con1[0]);
    const [cnt, setCnt] = useState(0);

    const ulChange = (idx) => {
        setUl(con1.find((item) => item.id === idx));
    };
    const onShow = (id) => {
        setData(
            data.map((item) =>
                item.id === id ? { ...item, isShow: true } : { ...item, isShow: false }
            )
        );
    };
    const nextBtn = (cnt) => {
        if (cnt === data.length) {
            setUl(data.find((item) => item.id === 1));
            () => onShow(cnt);
        } else {
            setUl(data.find((item) => item.id === cnt + 1));
            () => onShow(cnt);
        }
    };
    const prevBtn = (cnt) => {
        if (cnt === 1) {
            setUl(data.find((item) => item.id === data.length));
            () => onShow(cnt);
        } else {
            setUl(data.find((item) => item.id === cnt - 1));
            () => onShow(cnt);
        }
    };

    return (
        <>
            <section id="container">
                <div className="mainBar">
                    <h2>{ul.title}</h2>
                    <p className="btn">
                        <button onClick={() => prevBtn(ul.id)}>
                            <MdNavigateBefore />
                        </button>
                        <button onClick={() => nextBtn(ul.id)}>
                            <MdOutlineNavigateNext />
                        </button>
                    </p>
                </div>
                <div className="main">
                    <div className="mainImg">
                        <img src={ul.bigurl} alt={ul.title} />
                        <p className="num">
                            {ul.id}/ <em className="total">{con1.length}</em>
                        </p>
                    </div>
                    <div className="mainDesc">
                        <Subworkcon1Page con1={con1} onShow={onShow} ul={ul} ulChange={ulChange} />
                    </div>
                </div>
                <Subworkcon1List con1={con1} ulChange={ulChange} />
            </section>
        </>
    );
};

export default Subworkcon1;
