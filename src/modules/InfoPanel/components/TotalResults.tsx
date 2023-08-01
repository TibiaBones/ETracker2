import React from "react";

function TotalResults() {

    return (
        <div className="infoPanel__totalResults">
            <div className="infoPanel__tr-flexContainer infoPanel__tr-flexContainer_marginTop">
                <span className="infoPanel__tr-flexElement">Итого за 20 октября 2022</span>
                <span className="infoPanel__tr-sum" ><span id="calcResult">0</span> р.</span>
            </div>

            <div className="infoPanel__tr-flexContainer">
                <span className="infoPanel__tr-flexElement">Итого за месяц</span>
                <span className="infoPanel__tr-sum">1273 р.</span>
            </div>
        </div>
    )
};

export default TotalResults;
