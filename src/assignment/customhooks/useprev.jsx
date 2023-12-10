import React, { useState, useEffect } from 'react';
import usePrevious from './prev';

const Prevcounter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {
    console.log(`Current Count: ${count}`);
    console.log(`Previous Count: ${prevCount}`);
  }, [count, prevCount]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Prevcounter;
