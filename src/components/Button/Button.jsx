import React from 'react';
import './Button.scss';

const Button = ({ text,className, onClick }) => {

 return (
   <button className={`btn ${className}`} onClick={onClick} type="submit" >{text}</button>
  )
}

export default Button
