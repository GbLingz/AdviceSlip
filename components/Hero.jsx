// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import divideImg from '../src/assets/pattern-divider-desktop.svg';
import dice from '../src/assets/icon-dice.svg';

const Hero = () => {
    const [quote, setQuote] = useState('');
    const [quoteId, setQuoteId] = useState(null);
  
    const bringQuote = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setQuote(data.slip.advice);
        setQuoteId(data.slip.id);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };
    useEffect(() => {
        bringQuote();
      }, []);
    
  
  return (
    <>
      <div className='card1'>
        <div className='card2 position-relative'>
            {quoteId && <p className='text-success card-text'> ADVICE #{quoteId} </p>}
          <p className='card-text'> {quote} </p>
          <img className='dividerImg' src={divideImg} alt="divideImg" />
        </div>
      <button className='dice-btn  position-absolute translate-middle start-50' onClick={bringQuote}>
            <img src={dice} alt='dice' />
        </button>
      </div>

    </>
  );
};

export default Hero;