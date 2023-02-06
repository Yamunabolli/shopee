import React, { useState, useEffect } from 'react'
import { Card, Input } from 'semantic-ui-react'
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function Search(props) {

    const [state, setState] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [state1,setState1]=useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
      .then(response => response.json()
      ).
      then(json => {setState(json);
      setState1(json)})
    },[])

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
    const [show, setShow] = useState(false)
    const [info, setInfo] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setInfo(item)
        setShow(true)
    }
    const cartHandler = (e) => {
        // console.log("called");
        // console.log(e)
        let a = localStorage.getItem("id");
        if (a == null) {
            a = JSON.stringify([]);
        }
        let b = JSON.parse(a);
        // console.log(b);
        b.push(e);
        // console.log(b);
        localStorage.setItem("id", JSON.stringify(b))

        props.setCartCount(props.cartCount + 1)
        props.setCount(b.length)
    }
    
    return (
        <>
          <Input
       className="searchcomp"

        placeholder='Search...'
        onChange={(e) => searchItems(e.target.value)}

      />
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


            {/* <div style={{ padding: 20,backgroundColor:'black' }}>
                <Input icon='search'
                    placeholder='Search...'
                    onChange={(e) => searchItems(e.target.value)}
                /></div>
<div className="products">{filteredResults.map(item=>
     <div  style={{padding:'1.5cm'}}key={item.id}>
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

<div className="products">
      {state1.map(item =>
          <div style={{ padding: '1cm' }} key={item.id}>
            <Card className="card" >
              <img src={item.image} className="productsimg" />
              {item.title}
              <strong className="price"><Badge bg="secondary">$:{item.price}</Badge></strong>

              <div>
                <Button className="info" variant="danger" onClick={() => handleShow(item)} ><h6>info</h6></Button>
                <Button className="addCart" style={{ height: "40px" }} variant="danger" onClick={() => cartHandler(item)}><h5> Add cart</h5></Button>
              </div>
            </Card>

          </div>)}

        </div>

        </>
    )
}
