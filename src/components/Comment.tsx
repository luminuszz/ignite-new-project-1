import LikeIcon from "@assets/like.svg";
import TrashIcon from "@assets/trash.svg";
import { Box, HStack, Image, VStack, Text, IconButton } from "@chakra-ui/react";
import React from "react";

import { Comment as CommentType, deleteComment, likeComment } from "@app/features/commentsSlice";
import { useAppDispatch } from "@app/hooks/redux";

type Props = {
  comment: CommentType;
};

const Comment: React.FC<Props> = ({ comment }) => {
  const { content, likes, id } = comment;

  const dispatch = useAppDispatch();

  const handleLike = () => dispatch(likeComment(id));

  const haldeDeleteComment = () => dispatch(deleteComment(id));

  return (
    <Box mb="28px">
      <HStack width="100%" alignItems="flex-start">
        <Image
          borderRadius="8px"
          boxSize="50px"
          width=""
          alt="user"
          src="https://avatars.githubusercontent.com/u/48535259?v=4"
        />
        <Box w="100%" maxWidth="686px">
          <Box bg="gray.100" p="16px" borderRadius="9px">
            <HStack justifyContent="space-between" alignItems="flex-start">
              <VStack alignItems="flex-start" spacing="-5px">
                <Text fontWeight="bold" fontSize="sm">
                  Davi Ribeiro
                  <Text ml="1" as="span" fontWeight="normal" color="gray.600">
                    (você)
                  </Text>
                </Text>
                <Text fontSize="12px" color="gray.600">
                  Cerca de 2h
                </Text>
              </VStack>

              <IconButton
                onClick={haldeDeleteComment}
                aria-label="delete comment"
                icon={<Image boxSize="24px" src={TrashIcon} cursor="pointer" w="100%" />}
                variant="unstyled"
                justifyContent="center"
              />
            </HStack>

            <Box color="gray.300" mt="16px" fontSize="14px">
              {content}
            </Box>
          </Box>

          <HStack mt="16px" spacing="10px" onClick={handleLike}>
            <Image boxSize="20px" src={LikeIcon} cursor="pointer" />
            <Text fontSize="14px" color="gray.600" cursor="pointer">
              {`Aplaudir • ${likes} `}
            </Text>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Comment;
