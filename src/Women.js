import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'

const Service=(props)=>{
    const[state,setState]=useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [state1,setState1]=useState([])

useEffect(()=>{
fetch("https://fakestoreapi.com/products/category/women's%20clothing")
.then(response => response.json()
).
 then(json => {setState(json);
      setState1(json)})
},[])
const[show,setShow]=useState(false)
const [info,setInfo]=useState('')

const handleClose = () => setShow(false);
const handleShow = (item) =>{
    setInfo(item)
    setShow(true)
} 
const cartHandler=(e)=>{
    // console.log("called");
    console.log(e)
    let a = localStorage.getItem("id");
    if (a == null) {
    a = JSON.stringify([]);
    }
    let b = JSON.parse(a);
    // console.log(b);
    b.push(e);
    // console.log(b);
    localStorage.setItem("id",JSON.stringify(b))
    props.setCartCount(props.cartCount+1)
props.setCount(b.length)
    }
    const searchItems = (searchValue) => {
      console.log(searchValue)
      setSearchInput(searchValue)
      if (searchValue !== "") {
        const filteredData = state.filter((item) => {
          console.log(Object.values(item.title).join(' ').toLowerCase().includes(searchInput.toLowerCase()))
          // console.log (item.title.toLowerCase().indexOf(Object.values(searchInput).join('').toLowerCase()))
          // return item.title.toLowerCase().indexOf(Object.values(searchInput).join('').toLowerCase())
          // console.log((Object.values(item)));
          return Object.values(item.title).join('').toLowerCase().includes(searchValue.toLowerCase())
  
        }
  
        )
  
        setState1(filteredData)
       console.log(filteredData)
      }
  
   else {
        console.log(state)
      
        console.log(filteredResults)
        setState1(state)
      }
   
    }
return(  
 
    <>
    <div className="searchcomp">
    <Input 
    className="center"
    icon='search'
        placeholder='Search...'
        onChange={(e) => searchItems(e.target.value)}
    /></div> 

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>description</Modal.Title>
</Modal.Header>
<Modal.Body>
    {/* <h1>bv</h1> */}
    <img src={info.image} className="productsimg"/><br></br><br></br>

Title:<p className="body">{info.title}</p><br></br>
Description:
<p className="body">{info.description}</p>
<h4><strong><Badge bg="secondary">$:{info.price}</Badge></strong></h4>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
Close
</Button>

</Modal.Footer>
</Modal>

<div className="products">
      {state1.map(item =>
          <div style={{ padding: '1cm' }} key={item.id}>
            <Card className="card" >
              <img src={item.image} className="productsimg" />
              <p className="ellipsis"> {item.title}</p>
              <strong className="price"><Badge bg="secondary">$:{item.price}</Badge></strong>

              <div>
                <Button className="info" variant="danger" onClick={() => handleShow(item)} ><h5>Info</h5></Button>
                <Button className="addCart"variant="danger" onClick={() => cartHandler(item)}><h5> Add cart</h5></Button>
              </div>
            </Card>

          </div>)}

        </div>
{/* 
<div className="products">{state.map(item=>
     <div  style={{padding:'1cm'}}key={item.id}>
 <Card  className="card" >
 <img src={item.image} className="productsimg"/>
 {item.title}
 <h4><strong><Badge bg="secondary">$:{item.price}</Badge></strong></h4> {item.categeory}
 <Button variant="danger" onClick={()=>handleShow(item)} className="info"><h6>info</h6></Button><br></br>
<Button className="add-cart" variant="danger" onClick={()=>cartHandler(item)}><h5 style={{color:'white',
  fontSize:'16px'  }}> Add cart</h5></Button>
    <div>
     </div>

 </Card>
 
</div>)}
</div> */}



</>
)
}
export default Service