import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Kamineni T S L V Devi Priya');
  const[age, setAge] = useState('19');
  const[studentID, setStudentID] = useState('XYZ461');
  
  const handleClickEvent = ()=> {

    setName('Vyshnavi Kamineni');
    setAge('23');
    setStudentID('ABC463');
  };

  return (
    <>
    <div className='App'>
      <h1> User Information</h1>
      <h2> Default Values are</h2><br></br>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student ID: {studentID}</p>
      <button onClick={handleClickEvent}>Click Here </button>
    </div>
    </>
  );
}

export default App;
