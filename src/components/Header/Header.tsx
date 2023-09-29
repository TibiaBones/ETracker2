import React from "react";
// import './header.scss';
import AccountIco from './components/AccountIco'

function Header() {

    return (
        <div className="header">
            <span className="header__title">ETracker</span>

            <input className="header__date" id="datepicker" type="text" value="03.12.2022" />

            <div className="header__account">
                <a className="header__accountText" href="#">Вход / Регистрация</a>
                {/* центрировать по вертикали вообще все */}

                <a className="header__imgContainer" href="#">
                    <AccountIco className="header__accountImg" />
                </a>
            </div>
        </div>
    )

}

export default Header