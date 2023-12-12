import React, { useState } from 'react';

const Playground = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleRunCode = () => {
    // Add code execution logic here
    // Set the output state based on the input
    setOutput(`Output: ${input}`);
  };

  return (
    <div>
      <h1>Interactive Playground</h1>
      <textarea value={input} onChange={handleInputChange} />
      <button onClick={handleRunCode}>Run Code</button>
      <div>{output}</div>
    </div>
  );
};

export default Playground;
