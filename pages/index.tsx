import type { GetServerSideProps, NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectValue,
} from "../store/slices/counterSlice";
import styles from "../styles/Home.module.css";
import { RootState, wrapper } from "../store";
import { useRef } from "react";
import { addUser, userValue } from "../store/slices/userSlice";
const Home: NextPage = ({ data }: any) => {
  console.log("name", data);

  const dispatch = useDispatch();
  // const count = useSelector((state:RootState)=>console.log("state",state));
  const count = useSelector(selectValue);
  const users = useSelector(userValue);
  const userRef = useRef<any>(null);
  const handleClick = () => {
    dispatch(addUser(userRef.current.value));
    userRef.current.value = null;
  };
  console.log("user", users);

  return (
    <div className={styles.container}>
      <h1>Next Redux Toolkit</h1>
      <p>Value of Count is {count}</p>
      <input type="text" ref={userRef} />
      <button onClick={handleClick}>Add User</button>
      <ul>{users?.length ? users.map((data: any) => <li>{data}</li>) : []}</ul>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store): any =>
    async () => {
      const res = await fetch(`http://localhost:3000/api/user`);
      const { data } = await res.json();
      store.dispatch(addUser(data));
      store.dispatch(increment())
    }
);

export default Home;
