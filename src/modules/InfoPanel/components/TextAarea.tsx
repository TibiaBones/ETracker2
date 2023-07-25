import React from 'react'
import {ReactComponent as TextAareaSvg} from './textAarea.svg';

interface Props {
    className?: string;
};

function TextAarea({className}: Props) {
    
    return (
        <TextAareaSvg className={className}/>
    );
};

export default TextAarea;