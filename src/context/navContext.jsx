import {  createContext, useState } from "react";

export const navContext = createContext(null);

const NavProvider = ({children})=>{
     const[active ,setActive] = useState("home");
    const  value = {
        active,
        setActive
     }
     return (<navContext.Provider value={value}>{children}</navContext.Provider>)

}
export default NavProvider;