import { NextPage } from "next";
import { useRouter } from "next/router";
import { image } from "qr-image";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAsync, useLocalStorage } from "react-use";
import { Box, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Stack } from "@chakra-ui/react";

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

  const query = useQuery(
    "authres",
    async () => {
      const response = await fetch(
        "https://webhook.site/79636c84-8cb0-4330-b84d-974786f39119"
      );
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("ERROR");
      }
    },
    {
      enabled: delayed,
      refetchInterval: 60000,
      onSuccess: () => {
        router.push("/success");
      },
    }
  );

  return (
    <Stack spacing={10} direction={["column", "column", "column", "row"]}>
      <VStack pt={20} spacing={10}>
        {/* <p>AUTHRES: {authRes}</p>
      <p>
        {query.isLoading && `loading...`}
        {query.isError && `ERROR: ${query.error}`}
        {query.data}
      </p>*/}
        <Box>
          {qrCode && (
            <img
              src={`data:image/png;base64,${qrCode}`}
              style={{ maxWidth: "300px" }}
              alt="qrcode"
            />
          )}
        </Box>
      </VStack>

      <Box>
        <chakra.img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/avis-sangue.jpeg`}
          borderRadius="2xl"
        />
      </Box>
    </Stack>
  );
};

export default Request;
