import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [apidata, setApidata] = useState([]);

  //useEffect(function,array)
  useEffect(() => {
    //condition 
    fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
      .then((data) => data.json()).then((response) => { setApidata([...response]); });


  }, []);

  return (
    <div className="App">
      <h1>Movie App</h1>
      <input type='text' placeholder='Enter movie name...' />
      {
      apidata?.map((data,index) =>{

        return(
          <div>
            <li key={index}>{data.Title} Year: {data.Year}</li>
            
      </div>
        )
      })
    }
  </div>
  )
}

export default App;
