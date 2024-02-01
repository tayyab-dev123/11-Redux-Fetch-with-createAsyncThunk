import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./features/gitUserSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state.app);
    return state.app;
  });
  if (data.isloading) {
    return <h3>Loading....</h3>;
  }
  if (data.error != null) {
    return <h3>{data.error}</h3>;
  }
  return (
    <div>
      <h1>Tayyab</h1>

      <button onClick={() => dispatch(getAllUsers())}>Get Users</button>
      <ul>
        {data.users.map((item) => {
          return <li key={item.id}>{item.login}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
