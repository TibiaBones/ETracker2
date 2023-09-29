import React from "react";
import DividerShort from './DividerShort';
import TextAarea from './TextAarea';

interface Props{
    operationStatus: number;
};

function CalcBlock(props: Props) {

    return (
        <form className="infoPanel__calcBlock">
            <div className="infoPanel__status">
                <span className="infoPanel__statusText" id="status25">{props.operationStatus}</span>
                <DividerShort className="infoPanel__dividerShort"/>
            </div>

            <div className="infoPanel__input">
                <input className="infoPanel__inputField" type="number" />
                <TextAarea className="infoPanel__textAarea"/>
            </div>

            <span className="infoPanel__result"><span id="result25">0</span> р.</span>
        </form>
    )
}

export default CalcBlock;
