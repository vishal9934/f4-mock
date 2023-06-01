
//we need to do this
// https://storage.googleapis.com/accio-digital-ocean-data/media/frontend4_mock/frontend4_mock_birdlist.gif
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, likePost } from './store';

function App() {
  const [inputValue, setInputValue] = useState('');
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleAddPost = () => {
    const newPost = { id: Date.now(), text: inputValue, likes: 0 };
    dispatch(addPost(newPost));
    setInputValue('');
  };

  const handleLikePost = postId => {
    dispatch(likePost(postId));
  };

  return (
    <div>
      <h1>Birds' Posts</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.text}
            <button onClick={() => handleLikePost(post.id)}>Like</button>
            <span>Likes: {post.likes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

