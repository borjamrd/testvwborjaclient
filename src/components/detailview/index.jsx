import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import axios from 'axios'


import logo from '../../logo.svg'



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
      
    function callPhone(phone){
      return window.open(phone)
    }
  
    const carTitle = mainCar.filter(title => title.carID == thiscar.id)
  return(
    <div>
      <a onClick={() => {navigation('/')}}>Atrás</a> 
    
      {carTitle.map((item)=>
         <div car-info>
          <img src={item.carImage}></img>
          <h1>{item.carName}</h1>
          <h3>Precio: {item.carPrice}</h3>  
          <p>Financiación desde: {item.carFee}</p>
          <h4>Prestaciones del motor</h4>
          <ul>
            <li>{item.carDataOne}</li>
            <li></li>{item.carDataTwo}
            <li>{item.carDataThree}</li>
            <li>{item.carDataFour}</li>
            <li>{item.carDataFive}</li>

          </ul>
          <p>¿Quieres verlo? Ven a <a target='_blank' href={item.carLocationLink}>{item.carLocation}</a></p>
          <div className='button-section'>
              <button onClick={sendEmail}>Me interesa</button>
              <button><a href={item.carPhone} >Llámanos</a></button>
          </div>
        </div>
        
      )}
     {/* <DemoCarousel /> */}
  
    </div>
  )
  }
  
 /* 
 function DemoCarousel() {
   
        return (
            <Carousel>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
} */
  