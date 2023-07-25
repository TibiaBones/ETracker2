import React from "react";
import DividerShort from './DividerShort';
import TextAarea from './TextAarea';
import './calcBlock.scss';

interface Props{
    operationStatus: number;
};

function CalcBlock(props: Props) {

    return (
        <form className="calcBlock">
            <div className="calcBlock__status">
                <span className="calcBlock__statusText" id="status25">{props.operationStatus}</span>
                <DividerShort className="calcBlock__dividerShort"/>
            </div>

            <div className="calcBlock__input">
                <input className="calcBlock__inputField" type="number" />
                {/* <svg className="calc-textAarea_img">
                    <use href="#textAarea" />
                </svg> */}
                <TextAarea className="calcBlock__textAarea"/>
            </div>

            <span className="calcBlock__result"><span id="result25">0</span> р.</span>
        </form>
    )
}

export default CalcBlock;
