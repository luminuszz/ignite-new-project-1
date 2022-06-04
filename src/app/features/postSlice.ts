import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import { RootState } from "@app/store";

export type Comment = {
  id: number;
  content: string;
  likes: number;
};

export type Post = {
  id: number;
  content: string;
  comments: Comment[];
};

const postAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
});

const PostSlice = createSlice({
  name: "posts",
  initialState: postAdapter.getInitialState(),
  reducers: {
    publishPost: postAdapter.addOne,
  },
});

export const postSelector = postAdapter.getSelectors<RootState>((state) => state.posts);

export const { publishPost } = PostSlice.actions;

export default PostSlice.reducer;
