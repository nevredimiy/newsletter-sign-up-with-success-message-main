import React from 'react'
import Button from '../Button/Button'
import IconList from '../../assets/images/icon-list.svg';

import './Popap.scss';

const Popap = ({ email, className, handlePopap }) => {
  
  const popapClose = () => {
    handlePopap();
    console.log("I am Popap");
  }
    
  return (
    <div className={`popap ${className}`}>
      <div className="popap__content">
        <img className="popap__image-confirmation" src={IconList} alt="Sending Confirmation" />
        <h1 className="popap__title">Thanks for subscribing!</h1>
        <p className="popap__text">A confirmation email has been sent to <span className="text-email">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        <Button className="popap__btn" text="Dismiss message" onClick={popapClose} />
      </div>    
    </div>      
  )
}

export default Popap
