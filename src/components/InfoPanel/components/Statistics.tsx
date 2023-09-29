import React from "react";

function Statistics() {
    return(
        <div className="infoPanel__statContainer">
                <span className="infoPanel__mainTitle">Статистика</span>

                <div className="infoPanel__schedule">
                    тут будет график
                </div>

                <div className="infoPanel__flexContainer">
                    <span className="infoPanel__statFlexElement">Итого за месяц —
                        <span className="infoPanel__calcData">23520</span>
                        пунктов</span>
                    <span className="infoPanel__statFlexElement">На <span className="stat-FlexElement_calcData">21</span>% выше предыдущего</span>
                </div>
            </div>
    )
}

export default Statistics;