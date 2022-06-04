import { combineReducers } from "@reduxjs/toolkit";

import CommentReducer from "@app/features/commentsSlice";
import PostReducer from "@app/features/postSlice";

const RootReducer = combineReducers({
  posts: PostReducer,
  comments: CommentReducer,
});

export default RootReducer;
