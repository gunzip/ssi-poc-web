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
        "https://webhook.site/79636c84-8cb0-4330-b84d-974786f39119",
        {
          method: "POST",
        }
      );
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("ERROR");
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
        <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
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
