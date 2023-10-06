import React from "react";
import Arrow from '../../../../icons/Arrow';

function Switcher() {
    return (
        <div className="calendar__settingsPanelflexContainer">

            <Arrow className="calendar__switchButton" />

            <span className="calendar__month">Октябрь</span>

            <Arrow className="calendar__switchButton calendar__switchButton_right" />

        </div>
    )
}

export default Switcher;