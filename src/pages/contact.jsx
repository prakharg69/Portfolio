import React, { useContext, useEffect } from 'react'
import { navContext } from '../context/navContext';
import Navbar from '../components/ui/navbar';

function Contact() {
    const {setActive} = useContext(navContext);
    useEffect(()=>{
      setActive("contact");
    },[]);
  return (
    <>
   <section className='grid-bg  h-screen'></section>
   <Navbar></Navbar>
   </>
  )
}

export default Contact