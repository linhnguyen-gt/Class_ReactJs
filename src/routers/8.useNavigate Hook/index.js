import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateLearn8 = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 3000);
  return (
    <>
      <h1>Ok</h1>
    </>
  );
};

export default NavigateLearn8;
