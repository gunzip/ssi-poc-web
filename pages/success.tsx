import { NextPage } from "next";

import { VStack, HStack } from "@chakra-ui/layout";

const Success: NextPage = () => {
  return (
    <HStack spacing={10}>
      <VStack pt={20} spacing={10} width={["100%", "100%", "100%", "30%"]}>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/vampire.jpeg`}
          width="400"
          height="350"
        />
      </VStack>
    </HStack>
  );
};

export default Success;
