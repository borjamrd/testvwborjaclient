import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios'




export function DetailView() {

  let thiscar = useParams();
  console.log(thiscar.id, 'params')

  const navigation = useNavigate();

  
  const [mainCar,setCar] = useState([])

    useEffect(()=>{
      async function fetchcar(){
        const resp = await axios.get('http://localhost:3002/api/car')
     
      setCar([...resp.data.Novedades])
      
      console.log(resp.data.Novedades, "individual car response")
    }
    fetchcar();
    },[])

    function sendEmail() 
      {
         window.location = "mailto:borjamrd1@gmail.com";
      }
 
  
    const carTitle = mainCar.filter(title => title.carNameParams == thiscar.id)
  return(
    <div>
      <a onClick={() => {navigation('/')}}>Atrás</a> 
 
      {carTitle.map((item)=>
         <div car-info>
          <img src={item.carImage}></img>
          <h1>{item.carName}</h1>
          <h3>Precio: {item.carPrice}</h3>  
          <p>Financiación desde: {item.carFee}</p>
          <p>¿Quieres verlo? Ven a <a target='_blank' href={item.carLocationLink}>{item.carLocation}</a></p>
          <div className='button-section'>
              <button onClick={sendEmail}>Me interesa</button>
              <button >Llamar ya</button>
          </div>
        </div>
        
      )}

    </div>
  )
  }
  
 