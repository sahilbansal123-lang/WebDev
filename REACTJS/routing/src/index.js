import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
  json,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div className="post-container">
        {posts.map((post) => (
          <NavLink style={{ display: "block" }} to={`/post/${post.id}`}>
            {post.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//     </div>
//   );
// };
// const Profile = () => {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//     </div>
//   );
// };
// const Settings = () => {
//   return (
//     <div>
//       <h1>Settings Page</h1>
//     </div>
//   );
// };
// const SayUser = () => {
//   const params = useParams();
//   console.log(params);
//   return (
//     <div>
//       <h1>Your Name is {params.userId}</h1>
//     </div>
//   );
// };

const PostPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);
  if (data == null) return <p>Loading...</p>;
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* STATIC ROUTING WHERE WE HARDCODED THE ROUTE */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />

        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}

        {/* DYNAMIC ROUTING WHERE IT COMES AUTOMATICALLY */}
        {/* <Route path="/user/:userId" element={<SayUser />} /> */}
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
