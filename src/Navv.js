import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Outlet} from "react-router-dom";import { useNavigate } from 'react-router';
import React from 'react';
import { FcShop } from "react-icons/fc";
import { GiLoincloth } from "react-icons/gi";
import { GiJewelCrown } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { BiFridge } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import  { useEffect ,useState} from 'react';
import './Navv.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal, ModalBody } from "react-bootstrap";
import SplitButton from 'react-bootstrap/SplitButton';


function MyVerticallyCenteredModal(props) {
  return (
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
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
}
 
function ColorSchemesExample(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const nav = useNavigate()
  const electonicsHandler=()=>{
    nav("/Navv/electronics");}
    const jewelleryHandler=()=>{
      nav("/Navv/Jewellery");
    }
      const menHandler=()=>{
        nav("/Navv/Men");
        }
        const carthandler=()=>{
          nav("/Navv/Cart");
          }
          const Loginhandler=()=>{
            nav("/");
            }
        const womenHandler=()=>{
        nav("/Navv/women");
        }
        const searchhandler=()=>{
          nav("/Navv/Search")
          }
          const[state,setState]=useState([])

          useEffect(()=>{
          fetch('https://fakestoreapi.com/products')
            .then(response => response.json()
            ).
            then(json =>setState(json))
      
            },[])
            {state.map((e)=>{
              <div>{e.title}</div>
            })}
return(
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
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
<div className='navcard'>

  <Navbar className="resolution " bg="dark" variant="dark">


<Navbar.Brand href="/Navv/Cardie" className='navbarbrand' >

<strong> <FcShop/> Shoppy</strong>
</Navbar.Brand>
&nbsp;&ensp;&ensp;
{/* <div className='mobileview'> */}
{/* <Nav  className='navbar' > */}

<Button variant="dark" onClick={electonicsHandler} className="button" ><BiFridge/><h6 >Electronics</h6></Button>
<Button variant="dark" onClick={jewelleryHandler}  className='button'><GiJewelCrown/><h6>Jewellery</h6></Button>
<Button variant="dark" onClick={menHandler}   className='button'><GiClothes/><h6>Men</h6></Button> 
<Button variant="dark" onClick={womenHandler}   className='button'><GiLoincloth/><h6>Women</h6></Button> 
{/* media queries for mobile view */}
<div className='extra'>
<Button variant="dark" onClick={searchhandler}  className='button' ><BsSearch/><h6>Search</h6></Button>
<Button variant="dark" onClick={carthandler}   className='button' ><BsCart3/><span >+{props.cartCount}</span></Button>
<SplitButton
    variant='secondary'
         title="Profile" 
         className='dragdown'
>
      <Dropdown.Item   onClick={() => setModalShow(true)}>
      Details
          </Dropdown.Item>
       {/* <Button variant="primary" onClick={Loginhandler}><VscAccount/>   </Button>  */}
       <Dropdown.Item  onClick={Loginhandler}>
       signout
          </Dropdown.Item>
       </SplitButton>
</div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

<Button variant="dark" onClick={searchhandler}   className='button'><BsSearch/><h6>Search</h6></Button>
<Button variant="dark" onClick={carthandler}   className='button'><BsCart3/><h6>cart<span >-{props.cartCount}</span></h6></Button>

   <SplitButton
    variant='secondary'
         title="Profile" 
         className='dragdown'
>
      <Dropdown.Item   onClick={() => setModalShow(true)}>
      Details
          </Dropdown.Item>
       {/* <Button variant="primary" onClick={Loginhandler}><VscAccount/>   </Button>  */}
       <Dropdown.Item  onClick={Loginhandler}>
       signout
          </Dropdown.Item>
       </SplitButton>
     
  {/* </Nav> */}

</Navbar>


</div>


<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Outlet/>

</>
);
}
export default ColorSchemesExample;