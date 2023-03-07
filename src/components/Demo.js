import React from 'react'
import { useState, useEffect } from 'react';

function Demo() {
    const [state,setState]=useState(['one'])
    const [items,setItems]=useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/Southindian/')
        .then(response=>response.json())
        .then(json=>setItems(json))
    },[state])
  return (
    <>
    <div>
      <button onClick={()=>{setState('one')}}>one</button>
      <button onClick={()=>{setState('two')}}>two</button>
    </div>
    {items.map(item=>{
        return <pre>{JSON.stringify(item)}</pre> 
    })}
    </>
  )
}

export default Demo
