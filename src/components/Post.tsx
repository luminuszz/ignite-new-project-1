import { Box, Button, Flex, Text, Textarea, VStack } from "@chakra-ui/react";
import Avatar from "@components/Avatar";
import Comment from "@components/Comment";
import { useState } from "react";

const Divider = () => <Box height="1px" bg="gray.700" w="100%" />;

const Post = () => {
  const [textArea, setTextArea] = useState("");

  const isEmpty = textArea.trim().length === 0;

  return (
    <Box bg="gray.800" maxW="832px" p="40px" borderRadius="8px">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex justifyContent="center" alignItems="flex-end">
          <Avatar imageUrl="https://avatars.githubusercontent.com/u/48535259?v=4" />

          <VStack ml="16px" alignItems="flex-start" spacing="-5px">
            <Text as="strong" color="gray.200" mt="1rem">
              Davi Ribeiro
            </Text>
            <Text as="span" color="gray.600" lineHeight="1.6">
              Full stack developer
            </Text>
          </VStack>

          <Box mt="30px">{/* Post content */}</Box>
        </Flex>

        <Text color="gray.600" fontSize="14px">
          Publicado há 1 hora
        </Text>
      </Flex>

      <Box />

      <Box my="24px">
        Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da
        Rocketseat. O nome do projeto é DoctorCare 🚀 👉 jane.design/doctorcare #novoprojeto #nlw #rocketseat
      </Box>

      <Divider />

      <VStack alignItems="flex-start" spacing="16px" mt="24px">
        <Text fontSize="1rem" fontWeight="bold" color="gray.200">
          Deixe seu feedback
        </Text>
        <Textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          variant="green"
          mt="1rem"
          fontSize="1rem"
          color="gray.300"
        />

        {!isEmpty && (
          <Button w="108px" h="49px" variant="solid">
            Publicar
          </Button>
        )}
      </VStack>

      <Box mt="24px">
        <VStack spacing="24px" />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Box>
    </Box>
  );
};

export default Post;
