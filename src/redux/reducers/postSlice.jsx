import { createSlice } from "@reduxjs/toolkit";
import { getPosts, createPost, addComment, toggleLike } from "./postOperation";

const initialState = {
  postsArray: [],
  error: null,
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null; 
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.postsArray = action.payload ? [...action.payload] : [];
        state.isLoading = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; 
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.postsArray.push(action.payload);
        state.isLoading = false;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { postId, comment } = action.payload;
        const post = state.postsArray.find((post) => post.id === postId);
        if (post) {
          post.comments = [...(post.comments || []), comment];
        }
        state.isLoading = false;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(toggleLike.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        const { postId, userId } = action.payload;
        const post = state.postsArray.find((post) => post.id === postId);
        if (post) {
          const likeIndex = post.likes.indexOf(userId);
          if (likeIndex !== -1) {
            post.likes.splice(likeIndex, 1);
          } else {
            post.likes.push(userId);
          }
        }
        state.isLoading = false;
      })
      .addCase(toggleLike.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const postReducer = postsSlice.reducer;














// import { createSlice } from "@reduxjs/toolkit";
// import { getPosts, createPost, addComment, toggleLike } from "./postOperation";

// const initialState = {
//   postsArray: [],
//   error: null,
//   isLoading: false,
// };

// const postsSlice = createSlice({
//   name: "posts",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(getPosts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getPosts.fulfilled, (state, action) => {
//         state.postsArray = action.payload ? [...action.payload] : [];
//         state.isLoading = false;
//       })
//       .addCase(getPosts.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(createPost.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(createPost.fulfilled, (state, action) => {
//         state.postsArray.push(action.payload);
//         state.isLoading = false;
//       })
//       .addCase(createPost.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(addComment.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addComment.fulfilled, (state, action) => {
//         const { postId, comment } = action.payload;
//         const post = state.postsArray.find((post) => post.id === postId);
//         if (post) {
//           post.comments = [...(post.comments || []), comment];
//         }
//         state.isLoading = false;
//       })
//       .addCase(addComment.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(toggleLike.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(toggleLike.fulfilled, (state, action) => {
//         const { postId, userId } = action.payload;
//         const post = state.postsArray.find((post) => post.id === postId);
//         if (post) {
//           const likeIndex = post.likes.indexOf(userId);
//           if (likeIndex !== -1) {
//             post.likes.splice(likeIndex, 1);
//           } else {
//             post.likes.push(userId);
//           }
//         }
//         state.isLoading = false;
//       })
//       .addCase(toggleLike.rejected, (state) => {
//         state.isLoading = false;
//       });
//   },
// });

// export const postReducer = postsSlice.reducer;





