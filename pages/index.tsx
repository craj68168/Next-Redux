import type { NextPage } from "next";
import { selectAuthState,  } from "../store/profile";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../store/store";
import Link from "next/link";

const Home: NextPage = ({ data }: any) => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>{authState ? "Logged in" : "Not Logged In"}</div>
        <button
          onClick={() =>
            authState
              ? dispatch((false))
              : dispatch((true))
          }
        >
          {authState ? "Logout" : "LogIn"}
        </button>
      </div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch((false));
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);
