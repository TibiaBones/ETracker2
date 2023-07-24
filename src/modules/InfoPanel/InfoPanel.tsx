import React from "react";
import './infoPanel.scss';
import Calculator from './components/Calculator';

function InfoPanel() {

    return (
        <div className="InfoPanel">

            <Calculator/>

            <div className="calcStat-dividerVertContainer">
                <div className="dividerVertical"></div>
            </div>

            <div className="statContainer">
                <span className="calcStatMainTitle">Статистика</span>

                <div className="stat-schedule">
                    тут будет график
                </div>

                <div className="stat-flexContainer">
                    <span className="stat-FlexElement">Итого за месяц —
                        <span className="stat-FlexElement_calcData">23520</span>
                        пунктов</span>
                    <span className="stat-FlexElement">На <span className="stat-FlexElement_calcData">21</span>% выше предыдущего</span>
                </div>
            </div>

        </div>
    )

}

export default InfoPanel;