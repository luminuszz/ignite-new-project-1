import Logo from "@assets/logo.svg";
import { Flex, Heading, Img } from "@chakra-ui/react";

const Header = () => (
  <Flex justifyContent="center" py="1.25rem" h="80px" bg="gray.800" alignItems="center">
    <Img height="2rem" src={Logo} alt="logo" />
    <Heading ml="2" fontSize="2xl">
      Ignite Feed
    </Heading>
  </Flex>
);

export default Header;
