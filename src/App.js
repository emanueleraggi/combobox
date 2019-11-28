import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>

    <select name="859-2-2" onChange='alert("changed")'>
      <option value="0">OFF</option>
      <option value="1">Drive Active Low</option>
    </select>
    <tr></tr><td></td>  
    <tr></tr><td></td> 
    <tr></tr><td></td>
    <tr></tr><td></td>
    <tr></tr><td></td>
        <input id="btn_Apply" class="btnb" type="button" value="Apply" onclick="applyChange();" onmouseover="this.className='btnb btnhov'" onmouseout="this.className='btnb'"/>
    <tr></tr>
    <td></td>
    <td></td>
    <tr></tr>
    <h4>Did it apply? if so this statement should turn green</h4>
     </React.Fragment>

  );
}

export default App;
