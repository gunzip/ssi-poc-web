import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { VStack, HStack } from "@chakra-ui/layout";

const Success: NextPage = () => {
  return (
    <HStack spacing={10}>
      <VStack pt={20} spacing={10} width={["100%", "100%", "100%", "30%"]}>
        <Image src="/vampire.jpeg" width="400" height="350" />
        <Link href="/" as="/">
          <a>BACK</a>
        </Link>
      </VStack>
    </HStack>
  );
};

export default Success;
