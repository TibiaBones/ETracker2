import React from "react";
import CalcBlock from './CalcBlock';
import './calculator.scss';
// import './infoPanel.scss';

function Calculator() {
 return(
    <div className="calculator">
                <span className="calculator__mainTitle">Калькулятор</span>

                <div className="calculator__container">
                    <div className="calculator__titles">
                        <span className="calculator__titlesText">Операция</span>
                        <span className="calculator__titlesText">Значение</span>
                        <span className="calculator__titlesText calculator__titlesText_margin">Результат</span>
                    </div>

                    <CalcBlock operationStatus={25}/>
                    <CalcBlock operationStatus={28}/>
                    <CalcBlock operationStatus={30}/>
                    <CalcBlock operationStatus={40}/>
                  
                    <div className="calc-total">
                        <div className="calc-totalFlexContainer calc-totalFlexContainer_marginTop">
                            <span className="calc-totalFlexElement">Итого за 20 октября 2022</span>
                            <span className="calc-totalFlexElement calc-totalFlexElement_sum" ><span id="calcResult">0</span> р.</span>
                        </div>

                        <div className="calc-totalFlexContainer">
                            <span className="calc-totalFlexElement">Итого за месяц</span>
                            <span className="calc-totalFlexElement calc-totalFlexElement_sum">1273 р.</span>
                        </div>
                    </div>

                    <div className="calc-buttonSave_flexDirection">
                        {/* <input class="calc-buttonSave" type="button" value="Сохранить">  */}
                        <input className="buttonSave-Setting" type="button" value="Сохранить"/>
                    </div>

                </div>
            </div>
 )
}

export default Calculator;