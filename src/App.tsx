import { Box, Grid, GridItem } from "@chakra-ui/react";
import Header from "@components/Header";
import Post from "@components/Post";
import Sidebar from "@components/Sidebar";

const App = () => (
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
        <Post />
      </GridItem>
    </Grid>
  </Box>
);

export default App;
