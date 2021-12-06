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
      const response = await fetch(
        " https://css8dhhvhg.execute-api.eu-south-1.amazonaws.com/test/signup "
      );
      if (response.status === 200) {
        return response.json().then((res) => res.authenticationRequest);
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
