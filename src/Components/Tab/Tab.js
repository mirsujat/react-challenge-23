import React from 'react';

const Tab = (props) => {
const onClick = () => props.onClick(props.label);

    return (
        <li onClick={onClick}>{props.label}</li>
    );
}

export default Tab;