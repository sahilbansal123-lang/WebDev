import logo from "./logo.svg";
import "./App.css";
import { getPosts } from "./Api";
import { useEffect, useState } from "react";

import PostCard from "./components/PostCard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div className="App">
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}

export default App;
