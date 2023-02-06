import React from 'react'
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';

export default function Cardie() {
    const nav = useNavigate()

const show=()=>{
    nav("/Navv/Electronics")
  }
  const show1=()=>{
    nav("/Navv/Jewellery")
  }
  const show2=()=>{
    nav("/Navv/Men")
  }
  const show3=()=>{
    nav("/NAvv/Women")
  }
  return (
<>
<div className='menucard'>

  <div className=''>
  {/* <div className="d-flex flex-row mb-3">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 2</div>
        </div>
        <div>
        <div  className="d-flex flex-row mb-3">
        <div className="p-2">Flex item 3</div>
        <div className="p-2">Flex item 4</div>
        </div>
      

      </div> */}

<div className="d-flex flex-row mb-3">
        <div className="p-2">
          <Card style={{width:'25rem',height:'7cm',padding:'8px'}}>

<img src='https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg' height="100" width="100" className='image'></img>
<img src='https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg' height="100" width="100" className='image2'></img>
{/* <img src='https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg' height="100" width="100" className='image3'></img> */}

  <Button onClick={show}>showmore</Button>

</Card></div>
        <div className="p-2">
          <Card style={{width:'25rem',height:'7cm',padding:'8px'}}>
<img src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' height="85" width="85" className='image1'></img>
  <Button onClick={show1}>showmore</Button>
</Card></div>

        </div>
        <div>
        <div  className="d-flex flex-row mb-3">
        <div className="p-2"><Card style={{width:'25rem',height:'7cm',padding:'8px'}}>
<img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' height="100" width="100" className='image1' />
<Button variant="primary"onClick={show2} >showmore</Button>
</Card></div>
        <div className="p-2">
          <Card style={{width:'25rem',height:'7cm',padding:'8px'}}>
  <img src='https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg' height="100" width="100" className="image1"></img>
  <Button onClick={show3}>showmore</Button>
</Card></div>
        </div>
      

      </div>
  
  </div>





</div>
</>  )
}
