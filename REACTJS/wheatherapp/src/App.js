import "./App.css";
import Card from "./Component/Card";
import Input from "./Component/Input";
import Button from "./Component/Button";
import { useWheather } from "./Context/Wheather";

function App() {
  const Wheather = useWheather();
  console.log(Wheather);
  return (
    <div className="App">
      <h1>Wheather Forecast</h1>
      <Input />
      <Button onClick={Wheather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
