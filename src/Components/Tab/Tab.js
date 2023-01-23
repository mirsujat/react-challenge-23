
import React from 'react';

const Tab = (props) => {

const onClick = () => {
  const {label, onClick} = props;

  onClick( console.log("I am clicked"));
}  


  return(
    <li 
     onClick={onClick}
     
     > 
     {props.label} 
     </li>
  )
};

export default Tab;