import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@app/store";

export type Comment = {
  postId: number;
  id: number;
  content: string;
  likes: number;
};

const commentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const CommentsSlice = createSlice({
  name: "comments",
  initialState: commentAdapter.getInitialState(),
  reducers: {
    makeComment: commentAdapter.addOne,

    likeComment: (state, { payload }: PayloadAction<number>) => {
      const comment = state.entities[payload];

      if (comment) comment.likes += 1;
    },

    deleteComment: commentAdapter.removeOne,
  },
});

export const { makeComment, likeComment, deleteComment } = CommentsSlice.actions;

export const commentSelector = commentAdapter.getSelectors<RootState>((state) => state.comments);

export const selectByPostId = (state: RootState, postId: number) =>
  commentSelector.selectAll(state).filter((comment) => comment.postId === postId);

export default CommentsSlice.reducer;
