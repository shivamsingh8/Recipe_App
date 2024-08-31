import {useState,useEffect} from 'react';
import './App.css';
import Recipes from './Recipes'
function App() {

  const [apidata,setApidata]=useState([]);
  const [request, setRequest]=useState('');
  const [query,setQuery]=useState('chicken');
const App_id='5a4e467b';
const App_key='4d32d02e84aec5b350b4ce793019fa35';


const Fetchapidata=async()=>{
const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`);
const data=await response.json();
setApidata(data.hits);
console.log(data.hits)
}

useEffect(()=>{
  Fetchapidata();
},[query]);

const Handlechange= e =>{
  setRequest(e.target.value);
}
const Handlesubmit= e =>{
  e.preventDefault();
  setQuery(request);
  setRequest('');
  console.log("hello");
}

  return (
    <div className="App">
      <form  className='search-form' onSubmit={Handlesubmit}>
      <input className="Search-bar" type="text" value={request} onChange={Handlechange} placeholder='Search recipes'/>    
      <button className="Search-button">Search</button>
      </form>
      <div className='apidata'>
      {
        apidata.map(data=><Recipes 
          key={data.recipe.label}
        calories={data.recipe.calories}
        title={data.recipe.label}
        image={data.recipe.image}
        ingredients={data.recipe.ingredients}
        />)
      }
      </div>
    </div>
  );
}

export default App;
