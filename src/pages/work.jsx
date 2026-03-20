import React, { useContext, useEffect } from 'react'
import Navbar from '../components/ui/navbar';
import { navContext } from '../context/navContext';


function Work() {
    const {setActive} = useContext(navContext);
    useEffect(()=>{
      setActive("work");
    },[]);
  return (
    <>
   <section className='grid-bg  h-screen '></section>
   <Navbar></Navbar>
   </>
  )
}

export default Work