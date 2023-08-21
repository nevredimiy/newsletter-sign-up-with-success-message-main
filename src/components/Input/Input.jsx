import React from 'react';
import './Input.scss';

const Input = ({ labeltext, placeholder, email, validEmail }) => {

  const handleEmail = (e) => {
    email(e.target.value);
  }
 
  return (
    <>
      <div className="label">
        <span className="label__text">{labeltext}</span> 
        <span className={`label__error ${validEmail.isLableError}`}>Valid email required</span>
      </div>
      <input className={`input ${validEmail.input}`} type="text" id="subscribe" placeholder={placeholder} onChange={handleEmail}  />
    </>
  )
}

export default Input
