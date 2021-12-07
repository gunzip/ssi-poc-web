import { Box, Flex, HStack, Spacer, VStack } from "@chakra-ui/layout";
import {
  EmailIcon,
  HamburgerIcon,
  SearchIcon,
  BellIcon,
} from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
  return (
    <VStack
      maxW={{ xl: "1200px" }}
      m="0 auto"
      spacing={10}
      px={6}
      py={8}
      align="stretch"
    >
      <Flex>
        <Box>
          <img
            src={`${process.env.NEXT_BASE_PATH}/logo-avis.svg`}
            alt="AVIS"
            width="115"
            height="34"
          />
          <Heading fontSize="sm" mt="2">
            demo website
          </Heading>
        </Box>
        <Spacer />
        <HStack spacing={8}>
          <EmailIcon w={8} h={8} />
          <BellIcon w={8} h={8} />
          <SearchIcon w={6} h={6} />
          <HamburgerIcon w={8} h={8} />
        </HStack>
      </Flex>
      <main>{children}</main>
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
    </VStack>
  );
}
