import React from "react";

interface SwitcherProps {
    className?: string;
}

export default function Arrow({className} : SwitcherProps) {
    return (
        <div className={className}>
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 19.5C9.41504e-07 8.73045 8.73045 -9.41504e-07 19.5 0C30.2696 9.41504e-07 39 8.73045 39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 -9.41504e-07 30.2696 0 19.5Z" fill="#5C415D" />
                <path fillRule="evenodd" clipRule="evenodd" d="M24.0607 7.93934C24.6464 8.52513 24.6464 9.47488 24.0607 10.0607L14.1213 20L24.0607 29.9393C24.6464 30.5251 24.6464 31.4749 24.0607 32.0606C23.4749 32.6464 22.5251 32.6464 21.9393 32.0606L9.87869 20L21.9393 7.93934C22.5251 7.35356 23.4749 7.35356 24.0607 7.93934Z" fill="#F0F0F0" />
            </svg>
        </div>

    )
}

