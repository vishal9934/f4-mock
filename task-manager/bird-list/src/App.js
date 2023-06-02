
//we need to do this
// https://storage.googleapis.com/accio-digital-ocean-data/media/frontend4_mock/frontend4_mock_birdlist.gif
import React, { useState } from 'react';

function BirdList() {
  const [birds, setBirds] = useState([]);
  const [newBird, setNewBird] = useState('');

  const handleInputChange = (event) => {
    setNewBird(event.target.value);
  };

  const handleAddBird = () => {
    if (newBird.trim() !== '') {
      setBirds([...birds, { name: newBird, likes: 0 }]);
      setNewBird('');
    }
  };

  const handleLike = (index) => {
    const updatedBirds = [...birds];
    updatedBirds[index].likes += 1;
    setBirds(updatedBirds);
  };

  return (
    <div>
      <h1>Bird List</h1>
      <div>
        <input
          type="text"
          value={newBird}
          onChange={handleInputChange}
          placeholder="Enter bird name"
        /><br/>
        <button onClick={handleAddBird}>Add</button>
      </div>
      <div>
        <ul>
          {birds.map((bird, index) => (
            <li key={index}>
              {bird.name} <br/>likes: {bird.likes} 
              <button onClick={() => handleLike(index)}>+</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BirdList;