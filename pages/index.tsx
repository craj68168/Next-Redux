import type { NextPage } from "next";
import Link from "next/link";
import { setProfileData } from "../store/slices/profile";
import { wrapper } from "../store/store";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>Welcome to Home Page</h1>
        <Link href="/profile">
          <a>Go to Profile Page</a>
        </Link>
      </div>
    </>
  );
};

export default Home;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
//       console.log("State on server", store.getState());
//       return {
//         props: {
//           authState: false,
//         },
//       };
//     }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const data = store.dispatch(setProfileData("My Server Data"));
    return {
      props: {
        data: data,
      },
    };
  }
);
