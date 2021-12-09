import { Box, Flex, HStack, Spacer, VStack } from "@chakra-ui/layout";
import {
  EmailIcon,
  HamburgerIcon,
  SearchIcon,
  BellIcon,
} from "@chakra-ui/icons";
import { Heading, Link } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { assetPrefix } from "../../config";

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
          <Link href={`/`}>
            <img
              src={`${assetPrefix}/logo-avis.svg`}
              alt="Home"
              width="115"
              height="34"
            />
          </Link>
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
