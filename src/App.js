import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
 
function App() {
  const nayoks = ['Razzak', 'Jasim', 'Sakib', 'Salma', 'Suvo', 'Bappi', 'Khan']
  const products = [
    {name: 'Micorsoft', price: 'Start 32.8'},
    {name: 'Photoshop', price: 'Start 32.8'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Xd Reader', price: '$0.99'},
    {name: 'Xd Reader', price: '$0.99'},
    {name: 'Xd Reader', price: '$0.99'}
  ]

  const friends = [
    {name: 'Jamal', age: 20},
    {name: 'Kamal', age: 20},
    {name: 'Atik', age: 20},
    {name: 'Hira', age: 20},
    {name: 'Malek', age: 20}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a React Person</h1>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
          {products.map(product => <li>{product.name}</li>)}
        </ul>
        {products.map(pd => <Product product={pd}></Product>)}
        {friends.map(friendInfo => <Friend friend={friendInfo}></Friend>)}
        
        <Person title="Ahan" job="Student"></Person>
        <Person title="Samrat" job="Banker"></Person>
        </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic User: </h3>
      <ul>
        {users.map(user => <li>User Name: {user.name}</li>)}
        {users.map(user => <li>Phone Number:{user.phone}</li>)}
        {users.map(user => <h4>E-mail: {user.email}</h4>)}
      </ul>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => {if(count >= 1) {setCount(count - 1)}}}>Decrease</button>
    </div>
  )
}
function Product(props){
    const productStyle={
      border:'1px solid gray',
      borderRadius: '10px',
      backgroundColor: 'aqua',
      height:'150px',
      width: '200px',
      float:'left',
      color:'black',
      marginTop: '10px'
    };
    const {name, price} = props.product;
    return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
    )
}

function Person(props){
   return (
  <div style={{position:'inline', width:'400px', lineHeight: '10px', color:'red', backgroundColor:'aqua', padding:'2px', margin:'10px'}}> 
    <h3>{props.title}</h3>
    <p>{props.job}</p>
    </div>
  )
}
function Friend(props){
  return (
    <div style={{borderRadius:'15px', position:'inline', width:'350px', lineHeight: '10px', color:'red', backgroundColor:'#fff', padding:'2px', margin:'10px'}}>
      <h1>Name: {props.friend.name}</h1>
      <h2>Age: {props.friend.age}</h2>
    </div>
    
  )
}

export default App;
