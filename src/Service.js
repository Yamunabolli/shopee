import React, { useState, useEffect } from "react";

const Service=()=>{
    const[state,setState]=useState([])

useEffect(()=>{
fetch('https://fakestoreapi.com/products')
.then(response => response.json()
).
then(json =>setState(json))
},[])
return(

<div>{state.map(item=> <li key={item.id}>{item.price}</li>)}</div>
)
}
export default Service