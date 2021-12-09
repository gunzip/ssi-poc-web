import { NextPage } from "next";

import { VStack, HStack } from "@chakra-ui/layout";
import { assetPrefix } from "../config";

const Success: NextPage = () => {
  return (
    <HStack spacing={10}>
      <VStack pt={20} spacing={10} width={["100%", "100%", "100%", "30%"]}>
        <img src={`${assetPrefix}/vampire.jpeg`} width="400" height="350" />
      </VStack>
    </HStack>
  );
};

export default Success;
