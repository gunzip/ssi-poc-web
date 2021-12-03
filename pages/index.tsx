import { NextPage } from "next";
import Link from "next/link";
import { BACKEND_URL } from "../config";

const Home: NextPage = () => {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about" as={BACKEND_URL + "/about"}>
        <button>About</button>
      </Link>
    </div>
  );
};

export default Home;
