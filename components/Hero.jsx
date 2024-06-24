import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import divideImg from '../src/assets/pattern-divider-desktop.svg';
import dice from '../src/assets/icon-dice.svg';

const Hero = () => {
    const [advice, setAdvice] = useState('');
    const [adviceId, setAdviceId] = useState(null);
  
    const fetchAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };
    useEffect(() => {
        fetchAdvice();
      }, []);
    
  
  return (
    <>
      <div className='card1'>
        <div className='card2 position-relative'>
            {adviceId && <p className='text-success card-text'> ADVICE #{adviceId} </p>}
          <p className='card-text'> {advice} </p>
          <img className='dividerImg' src={divideImg} alt="divideImg" />
        </div>
      <button className='dice-btn  position-absolute translate-middle start-50' onClick={fetchAdvice}>
            <img src={dice} alt='dice' />
        </button>
      </div>
    </>
  );
};

export default Hero;