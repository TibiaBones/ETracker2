import React from "react";

import Switcher from './modules/Switcher/Switcher';
import WeekPanel from './modules/WeekPanel/WeekPanel';

import DaysPanel from './modules/DaysPanel/DaysPanel';
// import Arrow from '../../../public/arrow.svg'

function Calendar() {

    return (
        <div className="calendar">

            <div className="calendar__dividerHorContainer">
                <div className="calendar__dividerHorizontal"></div>
            </div>

            <span className="calendar__mainTitle">График</span>

            <div className="calendar__settingsPanel">
                <div className="calendar__settingButtonContainer">
                    <input className="calendar__buttonSaveSetting" type="button" value="Настроить" />
                </div>

                <Switcher />
            </div>

            <WeekPanel />

            <DaysPanel />

        </div>
    )
}

export default Calendar;