import Link from "next/link";
export default function About() {
  return (
    <div>
      <div>About us</div>
      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>About a boy</a>
        </Link>
      </div>
    </div>
  );
}
