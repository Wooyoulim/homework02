import Subworkcon1PageDt from './Subworkcon1PageDt';

const Subworkcon1Page = ({ con1, onShow, ul, ulChange }) => {
    return (
        <div className="con1page">
            <dl>
                {con1.map((item) => (
                    <Subworkcon1PageDt
                        {...item}
                        key={item.id}
                        onShow={onShow}
                        ul={ul}
                        ulChange={ulChange}
                    />
                ))}
            </dl>
        </div>
    );
};

export default Subworkcon1Page;
