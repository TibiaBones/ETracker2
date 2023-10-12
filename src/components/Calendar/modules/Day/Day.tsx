import React from "react";
import StatusQuantity from '../StatusQuantity/StatusQuantity';

export default function Day(){
    return(
        <div className='calendar__day'> 
            <div className="calendar__dayContainer">
                <StatusQuantity />
                <StatusQuantity />
                <StatusQuantity />
                <StatusQuantity />
                <StatusQuantity />
                <StatusQuantity />
            </div>
        </div>
    )
}
