import './App.css';
import { useState } from 'react';
import { data } from './data';



function App() {

  const [cities, setCities] = useState(data);
  const {idCountry, city, image, visitPlaces} = data[cities];
  const [placesToVisit, setPlacesToVisit] = useState(data.visitPlaces);
  
  const removeSight = (id) => {
    let newSightList = visitPlaces.filter(visitPlaces => visitPlaces.id !== id); 
    setPlacesToVisit(newSightList);
  }

  const previousCity = () => {
    setCities((cities => {
      cities --;
      if (cities < 0) {
        return data.length-1;
      }
      return cities;
    }))
  }

  const nextCity = () => {
    setCities((cities => {
      cities ++;
      if (cities > data.length-1) {
        cities = 0;
      }
      return cities;
    }))
  }




  return (
    <div>
     <div className="container">
		<p>{idCountry}. {city} </p>
</div>



<div className="container">
        <img src={image} width="300px" alt="city" />
      </div>
      
     <div>
         {placesToVisit.map((visitPlaces, index) => 
            <li key={index}>{visitPlaces}
               <div className="container">
                  <button onClick={() => removeSight(id)}>Remove</button>
                </div>
              </li>)}
     </div>


<div className="btn container">
        <button onClick={previousCity}>Previous</button>
        <button onClick={nextCity}>Next</button>
      </div>
</div>

);


}



export default App;