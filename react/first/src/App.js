import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const friends = ['Ashikur', 'Raihan Uddin', 'AB Malek', 'Akash', 'Rahim'];
  const products = [
    { name: 'Samsung Mobile', price: '$100' },
    { name: 'Iphone', price: '$100' },
    { name: 'MacBook', price: '$300' },
    { name: 'Curve Monitor', price: '$150' }
  ];


  return (
    <div className="App">
      <header className="App-header">
        <ol style={{ textAlign: 'left' }}>
          <h1>My Friend's List</h1>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ol>
        <Counter></Counter>
        <Server></Server>
        {
          products.map(product=><Product info={product}></Product>)
        }

      </header>
    </div>
  );
}
// counter creation

function Counter() {
  const [count, setCount] = useState(0);

  const btnStyle = {
    padding: '10px 25px',
    borderRadius: '8px',
    backgroundColor: '#04aa6d',
    borderColor:'white',
    color:'white',
    fontWeight:'bold',
    fontSize:'18px',
    margin:"10px"
  }

  const countStyle={
    width:'500px',
    border:'2px solid yellow',
    padding:'10px',
    borderRadius:'8px',
    margin:'15px'
  }
  return(
    <div style={countStyle}>
      <h1>Count: {count}</h1>
      <button style={btnStyle} onClick={()=>setCount(count+1)}>Increase</button>
      <button style={btnStyle} onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
// Load data from server

function Server() {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  });

  const dataStyle={
    width:'500px',
    border:'2px solid yellow',
    padding:'10px',
    borderRadius:'8px',
    margin:'15px'
  }
  return(
    <div>
      <h1>Dynamic Data Load</h1>
        {
          users.map(user=>{
            return (
              <div style={dataStyle}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Addres: {user.address.street} {user.address.city}</p>
              </div>
            )
          })
        }
    </div>
  )
}

// showing product

function Product(props) {
  const { name, price } = props.info;

  const btnStyle = {
    padding: '10px 25px',
    borderRadius: '8px',
    backgroundColor: '#04aa6d',
    borderColor:'white',
    color:'white',
    fontWeight:'bold',
    fontSize:'18px'
  }

  const productStyle={
    width:'500px',
    border:'2px solid yellow',
    padding:'10px',
    borderRadius:'8px',
    margin:'15px'
  }
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button style={btnStyle}>BUY NOW</button>
    </div>
  )

}
export default App;
