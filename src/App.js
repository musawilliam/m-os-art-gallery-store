import React from 'react';
import styled from 'styled-components';
import Slider from './component/slider';
import image from './images/background.jpg'

const AppBackground = styled.div`
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>M/O's Art Gallery Store</h1>
      <h2 style={{ textAlign: 'center' }}>Artworks made from passion</h2>
      <h3 style={{ textAlign: 'center' }}>Make The World A Better Place With Art.</h3>
    <AppBackground>
      <Slider />      
    </AppBackground>
    </div>
  );
};

export default App;
