import { NextPage } from "next";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use";

const Home: NextPage = () => {
  const router = useRouter();
  const [, setAuthRes] = useLocalStorage("auth");

  const mutation = useMutation(
    "authres",
    async () => {
      const response = await fetch("http://localhost/signup");
      console.log(response.headers);
      if (response.status === 200) {
        return response.headers.get("location");
      } else {
        throw new Error(`ERR: ${response.status.toString()}`);
      }
    },
    {
      onSuccess: (data) => {
        setAuthRes(data);
        router.push("/request");
      },
    }
  );

  return (
    <div>
      <p>Lorem ipsum...</p>
      {mutation.isError && (
        <h5 onClick={() => mutation.reset()}>{mutation.error.toString()}</h5>
      )}
      {mutation.isLoading && <p>Requesting auth...</p>}
      <p>
        <button
          onClick={() => {
            mutation.mutate();
          }}
        >
          START REQUEST
        </button>
      </p>
    </div>
  );
};

export default Home;
