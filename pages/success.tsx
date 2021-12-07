import { NextPage } from "next";
import Link from "next/link";
import { VStack, HStack } from "@chakra-ui/layout";

const Success: NextPage = () => {
  return (
    <HStack spacing={10}>
      <VStack pt={20} spacing={10} width={["100%", "100%", "100%", "30%"]}>
        <img
          src="https://www.missioneparadiso.it/images/ndf/big/72.jpg"
          width="400"
        />
        <Link href="/" as="/">
          <a href="/">BACK</a>
        </Link>
      </VStack>
    </HStack>
  );
};

export default Success;
