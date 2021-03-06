import { NextPage } from "next";
import { useRouter } from "next/router";
import { image } from "qr-image";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAsync, useLocalStorage } from "react-use";
import { Box, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Container, Stack, Text } from "@chakra-ui/react";
import { assetPrefix } from "../config";

const streamToString = (stream: NodeJS.ReadableStream): Promise<string> => {
  const chunks: any[] = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("base64")));
  });
};

const Request: NextPage = () => {
  const router = useRouter();
  const [qrCode, setQrCode] = useState<string>();
  const [delayed, setDelayed] = useState<boolean>(false);
  const [authRes] = useLocalStorage<string>("auth");
  const [state] = useLocalStorage<string>("state");

  useEffect(() => {
    setTimeout(() => setDelayed(true), 20000);
  }, []);

  useAsync(async () => {
    // const parsedAuthRes = await parseAuthenticationRequestURI(authRes);
    // console.log(parsedAuthRes);
    const buffer = image(JSON.stringify(authRes), { type: "png" });
    const qrImg = await streamToString(buffer);
    setQrCode(qrImg);
  });

  useQuery(
    ["authres", state],
    async () => {
      const response = await fetch(
        `https://43arh28uwa.execute-api.eu-south-1.amazonaws.com/test/poll/${state}`
      );
      if (response.ok) {
        console.log(response.status);
        return response.text();
      } else {
        console.log(response.status);
        throw new Error("ERROR");
      }
    },
    {
      enabled: delayed,
      refetchInterval: 5000,
      onSuccess: () => {
        router.push("/success");
      },
    }
  );

  return (
    <Stack spacing={10} direction={["column", "column", "column", "row"]}>
      <VStack pt={5} spacing={10}>
        {/* <p>AUTHRES: {authRes}</p>
      <p>
        {query.isLoading && `loading...`}
        {query.isError && `ERROR: ${query.error}`}
        {query.data}
      </p>*/}
        <Container centerContent>
          <Text as="p" mb={5} size="m" fontWeight="bold">
            Inquadra il QRCode per autorizzare la richiesta con IO Wallet.
          </Text>
          {qrCode && (
            <img
              src={`data:image/png;base64,${qrCode}`}
              style={{ maxWidth: "300px" }}
              alt="qrcode"
            />
          )}
        </Container>
      </VStack>

      <Box>
        <chakra.img
          src={`${assetPrefix}/avis-sangue.jpeg`}
          borderRadius="2xl"
        />
      </Box>
    </Stack>
  );
};

export default Request;
