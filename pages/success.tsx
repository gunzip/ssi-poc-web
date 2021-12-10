import { NextPage } from "next";

import { VStack, HStack, Text } from "@chakra-ui/layout";

const Success: NextPage = () => {
  return (
    <HStack spacing={10}>
      <VStack pt={10} spacing={10} width={["100%", "100%", "100%", "30%"]}>
        <Text as="p" fontSize="xl" fontWeight="bold">
          Controlla il tuo Wallet per visualizzare le tue nuove credenziali
          AVIS!
        </Text>
        {/* <img src={`${assetPrefix}/vampire.jpeg`} width="400" height="350" /> */}
      </VStack>
    </HStack>
  );
};

export default Success;
