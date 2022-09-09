import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectValue } from "../slices/counterSlice";
import styles from "../styles/Home.module.css";
import type {RootState} from "../store/store"
const Home: NextPage = () => {
  const dispatch = useDispatch()
  // const count = useSelector((state:RootState)=>state.counter.value);
  const count = useSelector(selectValue);


  const incre = ()=>{
    dispatch(increment())
  }
  const decre = ()=>{
    dispatch(decrement())
  }
  return (
    <div className={styles.container}>
      <h1>Next Redux Toolkit</h1>
      <p>Value of Count is {count}</p>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>

    </div>
  );
};

export default Home;
