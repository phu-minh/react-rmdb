import React, { useState } from 'react';
import styled from 'styled-components';

import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const Room = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;

function App() {
    //lamp one
    const [islampOneOn, setIsLampOneOn] = useState(true);
    //lapm two
    const [islampTwoOn, setIsLampTwoOn] = useState(false);

    const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev);
    const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev);

  return (
    <Room>
      <Lamp lampOn={islampOneOn} position ='left' />
      <Lamp lampOn={islampTwoOn} position ='right' />
      <LightSwitch
          name = 'one' 
          callback = {handleLightSwitchOne}
          switchOn = {islampOneOn} 
          position ='left' />
      <LightSwitch
          name = 'two' 
          callback = {handleLightSwitchTwo}
          switchOn = {islampTwoOn}
          position ='right' />
    </Room>)
}

export default App;
