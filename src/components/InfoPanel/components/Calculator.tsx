import React from "react";
import CalcBlock from './CalcBlock';
import TotalResults from './TotalResults';
import ButtonSave from "./ButtonSave";

function Calculator() {
    return (
        <div className="infoPanel__calculator">
            <span className="infoPanel__mainTitle">Калькулятор</span>

            <div className="infoPanel__container">
                <div className="infoPanel__titles">
                    <span className="infoPanel__titlesText">Операция</span>
                    <span className="infoPanel__titlesText">Значение</span>
                    <span className="infoPanel__titlesText infoPanel__titlesText_margin">Результат</span>
                </div>

                <CalcBlock operationStatus={25} />
                <CalcBlock operationStatus={28} />
                <CalcBlock operationStatus={30} />
                <CalcBlock operationStatus={40} />
                <TotalResults />
                <ButtonSave />
            </div>
        </div>
    )
}

export default Calculator;