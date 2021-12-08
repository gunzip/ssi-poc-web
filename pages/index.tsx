import { NextPage } from "next";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use";
import { Box, Heading, Stack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Spinner } from "@chakra-ui/react";

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
    <Stack spacing={10} direction={["column", "column", "column", "row"]}>
      <VStack pt={20} spacing={10}>
        {/* mutation.isError && (
        <h5 onClick={() => mutation.reset()}>{mutation.error.toString()}</h5>
      )}
      {mutation.isLoading && <p>Requesting auth...</p> */}
        <Heading as="h3" size="xl" fontWeight="bold">
          Donare il sangue è un gesto semplice che può{" "}
          <Text as="span" color="avis.strong">
            salvare la vita
          </Text>{" "}
          di molte persone
        </Heading>
        <Box>
          {!mutation.isIdle && <Spinner />}
          {mutation.isIdle && (
            <Button
              backgroundColor="transparent"
              color="black"
              borderWidth="3px"
              borderStyle="solid"
              borderColor="black"
              fontWeight="700"
              onClick={() => {
                mutation.mutate();
              }}
              borderRadius="2xl"
              w="l"
              _hover={{
                backgroundColor: "blue.300",
                color: "white",
              }}
              _pressed={{
                backgroundColor: "blue.700",
                color: "white",
              }}
            >
              DONACI IL TUO SANGUE
            </Button>
          )}
        </Box>
      </VStack>
      <Box>
        <chakra.img
          src={`${process.env.NEXT_BASE_PATH || ""}/avis-sangue.jpeg`}
          borderRadius="2xl"
        />
      </Box>
    </Stack>
  );
};

export default Home;
