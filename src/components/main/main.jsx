import { useState, useEffect} from "react";
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import './styles.css'

export function Main(){

    const [car, setCar] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
      async function fetchcar(){
        const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
     
      setCar([...resp.data.meals])
      
      console.log(resp.data.meals, "car response")
    }
    fetchcar();
    },[])

    function sendEmail() 
{
    window.location = "mailto:borjamrd1@gmail.com";
}



    return (
      
    <div className="cars-section">
      
          
          
        {car.filter((item, idx) => idx <5).map((item)=>(
            <div className="eachcar" key={item.idMeal}>
               
                <img classname='car-img' height="300px" 
                 src={item.strMealThumb} alt={item.idMeal}></img>
                <h4>{item.strMeal}</h4>
                <p>{item.strInstructions}</p>

            <div>
            <button onClick={sendEmail}>Me interesa</button>
              <button onClick={()=> navigate(`/${item.idMeal}`)}>Reservar</button>
            </div>
           
            </div>
        ))}
     
    
    </div>
    )
    }
