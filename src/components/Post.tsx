import { Box, Button, Flex, Text, Textarea, VStack } from "@chakra-ui/react";
import Avatar from "@components/Avatar";
import Comment from "@components/Comment";
import React, { useState } from "react";

import { makeComment, selectByPostId } from "@app/features/commentsSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks/redux";

const Divider = () => <Box height="1px" bg="gray.700" w="100%" />;

type Props = {
  id: number;
  content: string;
};

const Post: React.FC<Props> = ({ id, content }) => {
  const [textArea, setTextArea] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const comments = useAppSelector((state) => selectByPostId(state, id));

  const isEmpty = textArea.trim().length === 0;

  const handlePublishPost = () => {
    setError("");

    if (isEmpty) {
      setError("O post não pode estar vazio");
      return;
    }

    dispatch(
      makeComment({
        likes: 0,
        postId: id,
        content: textArea,
        id: Math.random(),
      })
    );

    setTextArea("");
  };

  return (
    <Box bg="gray.800" maxW="832px" p="40px" borderRadius="8px" as="article" w="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex justifyContent="center" alignItems="flex-end" as="header">
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

        <Text title="Publicado em 11 de maio de 20222" color="gray.600" fontSize="14px" as="time">
          Publicado há 1 hora
        </Text>
      </Flex>

      <Box />

      <Box my="24px">{content}</Box>

      <Divider />

      <VStack alignItems="flex-start" spacing="16px" mt="24px">
        <Text fontSize="1rem" fontWeight="bold" color="gray.200">
          Deixe seu feedback
        </Text>
        <Textarea
          isRequired
          isInvalid={!!error}
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          variant="green"
          mt="1rem"
          fontSize="1rem"
          color="gray.300"
        />

        {!isEmpty && (
          <Button w="108px" h="49px" variant="solid" onClick={handlePublishPost}>
            Publicar
          </Button>
        )}
      </VStack>

      <Box mt="24px">
        <VStack spacing="24px" />

        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Box>
    </Box>
  );
};

export default Post;
