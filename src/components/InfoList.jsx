import React from 'react';
import style from './Blockinfo.module.scss';

const InfoList = () => {

  const dataItems = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ]

  return (
    <>
      <ul className={style.list}>
        {dataItems.map((item, index) => (
          <li key={index} className={style.item}>{item}</li>
        ))}        
      </ul> 
    </>
  )
}

export default InfoList
