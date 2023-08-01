import React from "react";
// import './infoPanel.scss';
import Calculator from './components/Calculator';
import Statistics from './components/Statistics';

function InfoPanel() {

    return (
        <div className="infoPanel">
            <Calculator />
            <div className="infoPanel__dividerVertical">
            </div>
            <Statistics />
        </div>
    )

}

export default InfoPanel;