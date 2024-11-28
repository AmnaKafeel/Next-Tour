import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./footer/page";
import Home from "./Home/page";

import MyCards from "./Cards/page";




export default function Main() {
  return (
   <>
      
       <Navbar/>
     
        <Home/>

        
       <div>
        <h1 className=" flex items-center justify-center border-blue-200 bg-slate-500 p-10 mt-7 Font-bold text-slate-900">Make Your Tour Memorable with Us</h1>
       </div>
       
        <MyCards/>
      
 
    <Footer/>
    
    </>
   
  );
}
