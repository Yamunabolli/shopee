import React, { useState } from 'react'
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { GrAddCircle} from "react-icons/gr";
import { FcBadDecision} from "react-icons/fc";
import Badge from 'react-bootstrap/Badge';
import {  Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Cart(props) {
console.log(props);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("id")))
    //  const[count,setCount]=useState(0)
  console.log(items);

 const handleremove=(e)=>{
   console.log(items.indexOf(e));
items.splice(items.indexOf(e),1);
console.log(items);

setItems([].concat(items))

localStorage.setItem("id",JSON.stringify(items))
props.setCartCount(props.cartCount -1)


 }
 const incHandler = () => {
  if (quantity < 10)
  setQuantity(e =>e+1)
  
  // // console.log("length is " +JSON.parse(localStorage.setItem("id", JSON.stringify(items))).lentgh);
  // // if (quantity < 10)
  // setQuantity(items =>
  // items.map((e)=>
  // items_id===e.id ? {...e, quantity : e.quantity + (e.quantity < 10 ? 1:10) } : e
  // )
  };
  
  const decHandler = (e) => {
  if (quantity > 1)
  setQuantity(e =>e-1)
  
  // if (quantity > 1)
  // setQuantity(items =>
  // items.map((e)=>
  // items_id===e.id ? {...e,quantity : e.quantity + 1} : e
  // )
  };
  
  // const count=quantity;
  const removeHandler = (e) => {
  console.log(items.indexOf(e));
  items.splice(items.indexOf(e), 1);
  console.log(items);
  
  let a=(localStorage.setItem("id", JSON.stringify(items)));
  setItems([].concat(items));
  // window.location.reload(true);
  };
  const[show,setShow]=useState(false)
const [info,setInfo]=useState([])
  // JSON.parse(localStorage.getItem("id")).length
  const [quantity, setQuantity] = useState(1);
  const handleClose = () => setShow(false);
const handleShow = (e) =>{
    setInfo(e)
    setShow(true)
} 
 const [state,setState]=useState({ 
  name: null ,
   
}
  )

 const handleChange = (e) => setState({name: e.target.value})

  return (


    
  items == null ?
    <h1>Cart is empty</h1> : 
    <div>

        {items.map((e) => {
          return (
            <>
      


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
                              <div  style={{padding:'1cm',backgroundColor:'black'}}key={e.id}>
                  <Card   className="card" >
                      <h1>{
                        <img src={e.image} className="cartimg"  />}</h1>
                
                        <h5>{e.title}</h5>
                        <h4><strong><Badge bg="secondary">$:{e.price}</Badge></strong></h4>
                     
                      <Button variant="danger" onClick={()=>handleShow(e)} className="info"><h5>Info</h5></Button><br></br>

                      {/* <Button variant="success" className='addButton'><GrAddCircle />Add</Button> */}
                      <Button variant="danger" className='removeButton' onClick={() => handleremove(e)}>Remove -</Button>
                      {/* <button>Add</button>  */}
                      </Card>
     </div>
                </div>
             
            </>
          )
        })}



</div>


  
      )}
 