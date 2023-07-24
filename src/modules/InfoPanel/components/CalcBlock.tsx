import React from "react";
// import './infoPanel.scss';

interface Props{
    operationStatus: number;
};

function CalcBlock(props: Props) {

    return (
        <form className="calculator__inputField">
            <div className="calc-status">
                <span className="calc-status_text" id="status25">{props.operationStatus}</span>
                
                {/* <svg className="calc-dividerShort_img">
                    <use href="#dividerShort" />
                </svg> */}
            </div>

            <div className="calc-input_background">
                <input className="calc-input" type="number" />
                {/* <svg className="calc-textAarea_img">
                    <use href="#textAarea" />
                </svg> */}
            </div>

            <span className="calc-result"><span id="result25">0</span> р.</span>
        </form>
    )
}

export default CalcBlock;
