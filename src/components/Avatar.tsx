import { Image } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  imageUrl: string;
  isUp: boolean;
};

const Avatar: FC<Props> = ({ imageUrl, isUp }) => (
  <Image
    boxSize="initial"
    borderRadius="8px"
    w="3.2rem"
    h="3.2rem"
    src={imageUrl}
    alt="user"
    border="2px solid"
    borderColor="gray.800"
    outline="2px solid"
    outlineColor="green.400"
    mt={isUp ? "-2rem" : "0"}
  />
);

export default Avatar;
