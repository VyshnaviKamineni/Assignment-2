import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Kamineni T S L V Devi Priya');
  const [age, setAge] = useState('19');
  const [studentID, setStudentID] = useState('XYZ461');
  const [updated, setUpdated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleUpdateClick = () => {
    setName('Vyshnavi Kamineni');
    setAge('23');
    setStudentID('ABC463');
    setUpdated(true);
  };

  const handleResetClick = () => {
    setName('Kamineni T S L V Devi Priya');
    setAge('19');
    setStudentID('XYZ461');
    setUpdated(false);
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <h1>User Information</h1>
      <button onClick={handleToggleVisibility} className="toggle-btn">
        {isVisible ? 'Hide Information' : 'Show Information'}
      </button>
      {isVisible && (
        <>
          <h2>{updated ? 'Updated Values are' : 'Default Values are'}</h2>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Student ID: {studentID}</p>
          <button onClick={handleUpdateClick} className="update-btn">Update</button>
          <button onClick={handleResetClick} className="reset-btn">Reset</button>
          <div className="input-container">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
            />
            <input
              type="text"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              placeholder="Enter Student ID"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
