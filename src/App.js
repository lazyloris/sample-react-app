import './App.css';
import {useState} from 'react';
import Counter from './Components/Counter';
import List from './Components/List';



function App() {

const [count, setCount] = useState(0);
const [list, setList] = useState([{id:1, name:'adam'}]);

let handleClick =(operation)=>{
   console.log(operation);
   if(operation == 'add'){
        setCount(prevCount=>{return prevCount+1});
   }
   else if(operation == 'sub'){
        setCount(prevCount => {return prevCount-1});
   }
}


  return (
        <>
            <Counter count={count}/>
            <button onClick={()=>{handleClick('add')}}>Increment</button>
            <button onClick={()=>{handleClick('sub')}}>Decrement</button>

            <hr/>

            <List list={list}/>

        </>
  );
}

export default App;
