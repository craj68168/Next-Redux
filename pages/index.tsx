import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectValue,
} from "../store/slices/counterSlice";
import styles from "../styles/Home.module.css";
import type { RootState } from "../store";
import { useRef } from "react";
import { addUser, userValue } from "../store/slices/userSlice";
const Home: NextPage = () => {
  const dispatch = useDispatch();
  // const count = useSelector((state:RootState)=>state.counter.value);
  const count = useSelector(selectValue);
  const users = useSelector(userValue);
  const userRef = useRef<any>(null);
  const handleClick = () => {
    dispatch(addUser(userRef.current.value));
    userRef.current.value = null;
  };
  return (
    <div className={styles.container}>
      <h1>Next Redux Toolkit</h1>
      <p>Value of Count is {count}</p>
      <input type="text" ref={userRef} />
      <button onClick={handleClick}>Add User</button>
      <ul>
        {users.map((data: any) => (
          <li>{data}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Home;
