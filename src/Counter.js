import React, { useState } from 'react';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="space-x-4">
        <Button label="Increment" onClick={() => setCount(count + 1)} />
        <Button label="Reset" onClick={() => setCount(0)} />
      </div>
    </div>
  );
}

export default Counter;
