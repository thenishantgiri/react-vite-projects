import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    counter < 10 ? setCounter(counter + 1) : setCounter(counter);
  };

  const decreaseValue = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(counter);
  };

  return (
    <>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
