import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { axios } from "react";

export const Page = () => {
    const [value , setValue] = useState({});

    async function getdata(){
         
    fetch('http://localhost:8080/data')
    .then((res) => {
       let data = await res.json();
       return data
    })
    .then((data) =>{
         setValue(data)
         console.log(data)
    })
      .catch((err)=> {
         console.log(err)
      })  
    }

 
  return (
    <div></div>
  )
}
