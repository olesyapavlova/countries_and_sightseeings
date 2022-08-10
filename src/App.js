import './App.css';
import { useState } from 'react';
import { data } from './data';



function App() {

  const [cities, setCities] = useState(data);
  const [placesToVisit, setPlacesToVisit] = useState(data.placesToVisit);
  const removeSight = (id) => {
    let newSightList = placesToVisit.filter(placesToVisit => placesToVisit.id !== id); 
    setPlacesToVisit(newSightList);
  }




  return (
    <div  className="container">
      {cities.map((thing => {
        const {idCountry, city, image, placesToVisit} = thing;
        return (
          <div key={idCountry}>            
            <p>{idCountry}. {city} </p>
            <div className="container">
              <img src={image} width="300px" alt="city" />
            </div>
            <div>
              {placesToVisit.map((placesToVisit, index) => 
              <li key={index}>{placesToVisit}
                <div className="container">
                    <button onClick={() => removeSight(id)}>Remove</button>
                </div>
              </li>)}
            </div> 
            
            

          </div>

          
        )
      }))}
      <button onClick={() => setCities([])}>Delete</button>
    </div>
);


}



export default App;