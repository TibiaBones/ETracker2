import React from "react";

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

                <div className="calendar__settingsPanelflexContainer">
                    <svg className="calendar__switchButton">
                        <use href="#arrow" />
                    </svg>

                    <span className="calendar__month">Октябрь</span>

                    <svg className="calendar__switchButton calendar__switchButton_right">
                        <use href="#arrow" />
                    </svg>
                </div>
            </div>

            <div className="calendar__daysBackground">
                <span className="calendar__daysContainer">пн</span>
                <span className="calendar__daysContainer">вт</span>
                <span className="calendar__daysContainer">ср</span>
                <span className="calendar__daysContainer">чт</span>
                <span className="calendar__daysContainer">пт</span>
                <span className="calendar__daysContainer">сб</span>
                <span className="calendar__daysContainer">вс</span>
            </div>
        </div>
    )
}

export default Calendar;