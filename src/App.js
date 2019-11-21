import React from 'react';
import './App.css';

function App() {
  return (
    <select name="859-2-2" onChange='alert("changed")'>
      <option value="0">OFF</option>
      <option value="1">Drive Active Low</option>
    </select>
  );
}

export default App;
