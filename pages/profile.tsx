import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../store/store";
import Link from "next/link";
import { selectProfile } from "../store/slices/profile";

const profile = () => {
  const data = useSelector(selectProfile);
  return (
    <div>
      <h1> Hello: {data}</h1>
      <div>
        <Link href={"/"}>
          <a>Back to Home page</a>
        </Link>
      </div>
    </div>
  );
};

export default profile;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    // const data = store.dispatch(setProfileData("My Server Data"));
    return {
      props: {},
    };
  }
);
