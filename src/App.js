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
           <ul >
            <li key={index}><p> <img src={data.Poster} /> 
            
           </p></li>
           <li><p><strong>Title:</strong> {data.Title}
           </p></li>
           </ul>
            
      </div>
        )
      })
    }
  </div>
  )
}

export default App;
