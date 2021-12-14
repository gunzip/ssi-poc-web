import { NextPage } from "next";
import Calendar from "react-calendar";
import { VStack, HStack, Text, Heading, Box } from "@chakra-ui/layout";
import "react-calendar/dist/Calendar.css";

const Success: NextPage = () => {
  return (
    <HStack spacing={10}>
      <VStack pt={10} spacing={10} width={["100%", "100%", "100%", "30%"]}>
        <Heading>Prenota la tua donazione!</Heading>
        <Box boxShadow="xl" rounded="md">
          <Calendar />
        </Box>
        {/* <img src={`${assetPrefix}/vampire.jpeg`} width="400" height="350" /> */}
        <Text as="p" fontSize="xl" fontWeight="bold">
          Controlla il tuo Wallet per visualizzare le tue nuove credenziali
          AVIS!
        </Text>
      </VStack>
    </HStack>
  );
};

export default Success;
