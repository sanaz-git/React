import { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  return (
    <div>
      <Count count={count} />
      <Button setCount={setCount} />
      <p>{feedback}</p>
    </div>
  );
}

export default Counter;
