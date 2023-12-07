import { useContext } from "react";
import "./App.css";
import Counter from "./Component/Counter";
import { CounterContext } from "./Context/Counter";

function App() {
  const countState = useContext(CounterContext);
  console.log(countState);

  return (
    <div className="App">
      <h1> Count is {countState.count} </h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
