import './App.css';
import Login from './Login';
import Navv from './Navv'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Men from './Men';
import Women from './Women';
import Electronics from './Electronics';
import Jewellery from './Jewellery';
import Cart from './Cart';
import Search from './Search';
import Cardie from './Cardie';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import  { useEffect } from 'react';
import { Modal, ModalBody } from "react-bootstrap";
import { Redirect } from 'react-router';

function MyVerticallyCenteredModal(props) {

  return (
    <>
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Account Details
      </Modal.Title>
    </Modal.Header>
    <Modal.Body> Name : Yamuna Bolli</Modal.Body>
    <Modal.Body>  Email:ybolli@mail.com</Modal.Body>
    <Modal.Body>    Ph no:5826858 </Modal.Body>
    <Modal.Body>{props.children}</Modal.Body>
    <Modal.Footer>
    {/* <DropdownButton>
    <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
    </DropdownButton> */}
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  
  </>
  );
}
   
    




function App(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const[cartCount,setCartCount]=useState(JSON.parse(localStorage.getItem("id"))?.length)
  const nav=useNavigate();

    // const[search,setSearch]=useState('')
    const[state,setState]=useState([])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json()
      ).
      then(json =>setState(json))
      // console.log(state.title);

      },[])
      {state.map((e)=>{
        <div>{e.title}</div>
        // console.log(e.title);   
      })}



  return (
    <>

    <div className="App">
    {/* <div className='grid1'> */}

<Routes>   
              
         <Route path='/' element={<Login/>} > 
  
          </Route>
       
            <Route path="/Navv"  element={<Navv setCartCount={setCartCount} cartCount={cartCount}   show={modalShow}
        onHide={() => setModalShow(false)}/>}>
         

             <Route path="/Navv/Men"  element={<Men setCartCount={setCartCount} cartCount={cartCount}   show={modalShow}
        onHide={() => setModalShow(false)}/>} />

        <Route path="/Navv/Women"  element={<Women setCartCount={setCartCount} cartCount={cartCount}   show={modalShow}
        onHide={() => setModalShow(false)}/>} />

         <Route path="/Navv/Electronics"  element={<Electronics  setCartCount={setCartCount} cartCount={cartCount}   show={modalShow} 
        onHide={() => setModalShow(false)}/>} />

        <Route path="/Navv/Jewellery"  element={<Jewellery setCartCount={setCartCount} cartCount={cartCount} show={modalShow}
        onHide={() => setModalShow(false)}/>} />

        <Route path="/Navv/Cart"  element={<Cart setCartCount={setCartCount} cartCount={cartCount}   show={modalShow}
        onHide={() => setModalShow(false)}/>} />
          
                <Route path="/Navv/Cardie" element={<Cardie/>}></Route>

                <Route path="/Navv/Search"  element={<Search />} />
               
                </Route>
      </Routes>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    {/* </div> */}
    
    </>
  );
}

export default App;
