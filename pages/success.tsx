import { NextPage } from "next";
import Link from "next/link";

const Success: NextPage = () => {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about" as={"/about"} passHref>
        <button>About</button>
      </Link>
    </div>
  );
};

export default Success;
