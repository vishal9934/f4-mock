import { createStore } from 'redux';

// Action types
const ADD_POST = 'ADD_POST';
const LIKE_POST = 'LIKE_POST';

// Action creators
export function addPost(post) {
  return { type: ADD_POST, payload: post };
}

export function likePost(postId) {
  return { type: LIKE_POST, payload: postId };
}

// Reducer
function reducer(state = { posts: [] }, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] }; 
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
        ),
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(reducer);

export default store;
