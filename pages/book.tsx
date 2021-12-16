import { NextPage } from "next";
import { useMutation, useQuery } from "react-query";
import { Box, Heading, Stack, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Spinner, Container } from "@chakra-ui/react";
import { assetPrefix } from "../config";
import { image } from "qr-image";
import { useState } from "react";

const streamToString = (stream: NodeJS.ReadableStream): Promise<string> => {
  const chunks: any[] = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("base64")));
  });
};

const Book: NextPage = () => {
  const [qrCode, setQrCode] = useState<string>();

  const mutation = useQuery(
    "authres",
    async () => {
      const response = await fetch(
        "https://43arh28uwa.execute-api.eu-south-1.amazonaws.com/test/signup"
      );
      if (response.status === 200) {
        return response.json().then((res) => res.authenticationRequest);
      } else {
        throw new Error(`ERR: ${response.status.toString()}`);
      }
    },
    {
      onSuccess: (data) => {
        const buffer = image(JSON.stringify(data), { type: "png" });
        streamToString(buffer)
          .then((qrImg) => setQrCode(qrImg))
          .catch(console.error);
      },
    }
  );

  return (
    <Stack spacing={10} direction={["column", "column", "column", "row"]}>
      <VStack spacing={10}>
        <Container centerContent>
          <>
            <Heading
              as="h3"
              size="xl"
              fontWeight="bold"
              maxWidth={"container.sm"}
            >
              Prenota la tua donazione.
            </Heading>
          </>
          <Text as="p" mb={5} mt={5} size="m" fontWeight="bold">
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

export default Book;
