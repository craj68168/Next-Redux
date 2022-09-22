import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../store/store";
import Link from "next/link";

const Home: NextPage = ({ data }: any) => {
  const dispatch = useDispatch();
  return (
    <>
      <div></div>
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
    return {
      props:{
        
      }
    }
  }
);
