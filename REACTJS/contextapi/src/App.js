import "./App.css";
import Item from "./Component/Item";
import Cart from "./Component/Cart";

function App() {
  return (
    <div className="App">
      <Item name="MacBook Pro" price={100000} />
      <Item name="iphone15 Pro" price={10000} />
      <Item name="iphone14 Pro" price={1000} />

      <Cart />
    </div>
  );
}

export default App;
