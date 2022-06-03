import baseCover from "@assets/baseCover.png";
import EditIcon from "@assets/edit.svg";
import { Box, Button, Flex, GridItem, Image, Link, Text, VStack } from "@chakra-ui/react";
import Avatar from "@components/Avatar";

const Sidebar = () => (
  <GridItem as="aside" bg="gray.800" borderRadius="8px" overflow="hidden">
    <Image src={baseCover} alt="capa" w="100%" h="72px" objectFit="cover" />

    <Box>
      <VStack alignItems="center" spacing="0" gap="0">
        <Avatar isUp imageUrl="https://avatars.githubusercontent.com/u/48535259?v=4/" />

        <Flex flexDir="column" alignItems="center">
          <Text as="strong" color="gray.200" mt="1rem">
            Davi Ribeiro
          </Text>
          <Text as="span" color="gray.600" lineHeight="1.6">
            Full stack developer
          </Text>
        </Flex>
      </VStack>
    </Box>

    <Box as="footer" mt="1.5rem" borderTopWidth="1px" borderColor="gray.700" py="1.5rem" px="2rem">
      <Button leftIcon={<Image src={EditIcon} />} w="192px" h="50px" variant="outline">
        <Link href="/#" as="a">
          Editar seu perfil
        </Link>
      </Button>
    </Box>
  </GridItem>
);

export default Sidebar;
