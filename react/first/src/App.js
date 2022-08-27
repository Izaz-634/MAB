import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const friends =[
    {name:'Ashikur Rahman',id:'201-35-540'},
    {name:'Raihan Uddin',id:'201-35-559'},
    {name:'Muneem Shahriar',id:'201-35-595'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        {
          friends.map(friend=><Friends info={friend}></Friends>)
        }
      </header>
    </div>
  );
} 

function Friends(props) {
  const boxStyle={
    border:'2px solid yellow',
    borderRadius:'10px',
    margin:"10px",
    width:'500px'
  }
  return(
    <div style={boxStyle}>
      <h2>{props.info.name}</h2>
      <h4>{props.info.id}</h4>
    </div>
  )
}
export default App;
