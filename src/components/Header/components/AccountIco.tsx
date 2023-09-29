import React from 'react'
import {ReactComponent as AccountSvg} from './account.svg';

interface Props {
    className?: string;
};

function AccountIco({className}: Props) {
    
    return (
        <AccountSvg className={className}/>
    );
};

export default AccountIco;