import React from 'react';

import ImageBlock from './components/ImageBlock/ImageBlock';
import BlockInfo from './components/BlockInfo';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Popap from './components/Popap/Popap';

import './App.css';



export default function App() {

  const [isOpen, setIsOpen] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [validEmail, setValidEmail] = React.useState({
    isLableError: 'hide',
    input: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку формы
  }

  const handlePopapOpen = () => {
    if (isEmail(email)) {
      setIsOpen('is-open');
      setValidEmail({ isLableError: 'hide', input: '' });
    } else {
      setValidEmail({ isLableError: 'show', input: 'input-error' });
    }
  }

  const handlePopapClose = () => {
    setIsOpen('');
    console.log('I am app - close')
  }

  const handleEmail = (email) => {
    setEmail(email);    
  }

  const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <main className='main'>
      <ImageBlock />
      <div className="container">
        <BlockInfo />
        <form className="subscribe_form" onSubmit={handleSubmit}>
          <Input labeltext="Email address" placeholder="email@company.com" email={handleEmail} validEmail={validEmail}  />
          <Button text="Subscribe to monthly newsletter" onClick={handlePopapOpen}  />
        </form>        
      </div>
      <Popap className={isOpen} email={email} handlePopap={handlePopapClose} />
      </main>   
  )
}
