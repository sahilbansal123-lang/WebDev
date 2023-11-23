import logo from "./logo.svg";
import "./App.css";
import { getPosts, getUser } from "./Api";
import { useEffect, useState } from "react";

import PostCard from "./components/PostCard";
import UserCard from "./components/useCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setuserData] = useState(null);

  // useEffect(() => {
  //   getPosts().then((posts) => setData(posts));
  // }, []);

  useEffect(() => {
    getUser().then((user) => setuserData(user.results[0]));
  }, []);

  console.log(userData);

  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      {/* {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )} */}
    </div>
  );
}

export default App;
