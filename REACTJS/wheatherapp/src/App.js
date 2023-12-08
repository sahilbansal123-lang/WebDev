import "./App.css";
import Card from "./Component/Card";
import Input from "./Component/Input";
import Button from "./Component/Button";

function App() {
  return (
    <div className="App">
      <h1>Wheather Forecast</h1>
      <Input />
      <Card />
      <Button />
    </div>
  );
}

export default App;
