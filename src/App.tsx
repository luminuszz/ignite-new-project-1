import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import Header from "@components/Header";
import Post from "@components/Post";
import Sidebar from "@components/Sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { postSelector, publishPost } from "@app/features/postSlice";
import { useAppSelector } from "@app/hooks/redux";

const fakeContent =
  " Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da\n" +
  "        Rocketseat. O nome do projeto é DoctorCare 🚀 👉 jane.design/doctorcare #novoprojeto #nlw #rocketseat";

const App = () => {
  const posts = useAppSelector(postSelector.selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(
        publishPost({
          id: Math.random(),
          content: fakeContent,
          comments: [],
        })
      );
    }
  }, [dispatch, posts.length]);

  return (
    <Box>
      <Header />

      <Grid
        maxW="md"
        w="100%"
        maxWidth="70rem"
        my="2rem"
        mx="auto"
        px="1rem"
        templateColumns="256px 1fr"
        gap="2rem"
        alignItems="flex-start"
      >
        <Sidebar />

        <GridItem as="main">
          <VStack spacing="32px">
            {posts.map((post) => (
              <Post id={post.id} content={post.content} />
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
