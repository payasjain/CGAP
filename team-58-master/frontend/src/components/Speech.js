import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
 
function Example(props) {
  const [value, setValue] = useState('');
  const { speak, cancel } = useSpeechSynthesis();
//   const data= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur eaque, exercitationem quo maxime dolore adipisci perspiciatis expedita porro illum dolorum, odio, sequi libero aspernatur autem minus quos atque reprehenderit?"

  return (
    <>
      <span>Listen to the article: </span>
      <button onClick={() => speak({ text: props.detail })}>Speak</button>
      <button onClick={() => cancel()}>Stop</button>
      <br />
    </>
  );
}
export default Example