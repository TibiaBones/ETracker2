import React from 'react'
import {ReactComponent as DividerShortSvg} from './dividerShort.svg';

interface Props {
    className?: string;
};

function DividerShort({className}: Props) {
    
    return (
        <DividerShortSvg className={className}/>
    );
};

export default DividerShort;