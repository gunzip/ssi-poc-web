import { NextPage } from "next";
import Link from "next/link";
import { BACKEND_URL } from "../config";

const Home: NextPage = () => {
  return (
    <div>
      <p>Hello World.</p>
      <p>
        <Link href="/request" as="/request" passHref>
          <button>REQUEST</button>
        </Link>
      </p>
    </div>
  );
};

export default Home;
