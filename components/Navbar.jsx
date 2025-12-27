
import  { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Navbar() {

 const [menuOpen, setMenuOpen] = useState(false);
 const ScrollToSection=(id)=>{
  const section= document.getElementById(id);
  if(section){
    section.scrollIntoView(
      {
        behavior:"smooth", block:"start"
      }
    )
  }
  setMenuOpen(false)
 }
    

  return ( 
    <>
      <nav className="bg-sky-50 text-gray-500 mx-10 shadow-sm shadow-sky-300 py-2  top-0 z-50  rounded-full mt-5 mb-4 ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">

          <h1 className="font-bold text-lg">Portfolio</h1>
        </div>

        {/* navbar links */}
        <div className="hidden md:flex items-center space-x-10">
          <button onClick={()=>ScrollToSection("home")} className="hover:text-gray-300" >Home</button>
           <button onClick={()=>ScrollToSection("skills")} className="hover:text-gray-300" >Skills</button>
            <button onClick={()=>ScrollToSection("projects")} className="hover:text-gray-300" >Projects</button>
             <button onClick={()=>ScrollToSection("certificates")} className="hover:text-gray-300" >Certificates</button>
              <button onClick={()=>ScrollToSection("education")} className="hover:text-gray-300" >Education</button>
               <button onClick={()=>ScrollToSection("contact")} className="hover:text-gray-300" >Contact</button>
                
       
        
      

                              
         
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden cursor-pointer hover:text-gray-300 transition duration-200" onClick={() => setMenuOpen(true)} aria-label="Open Menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white text-gray-500 shadow-lg transform transition-transform duration-300 z-50  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" className='cursor-pointer hover:text-gray-300'>
            <X size={24} />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-4">
           <button onClick={()=>ScrollToSection("home")} className="hover:text-gray-300 border-b border-sky-300" >Home</button>
           <button onClick={()=>ScrollToSection("skills")} className="hover:text-gray-300 border-b border-sky-300" >Skills</button>
            <button onClick={()=>ScrollToSection("projects")} className="hover:text-gray-300 border-b border-sky-300" >Projects</button>
             <button onClick={()=>ScrollToSection("certificates")} className="hover:text-gray-300 border-b border-sky-300" >Certificates</button>
              <button onClick={()=>ScrollToSection("education")} className="hover:text-gray-300 border-b border-sky-300" >Education</button>
               <button onClick={()=>ScrollToSection("contact")} className="hover:text-gray-300 border-b border-sky-300" >Contact</button>
                
          <div className='flex gap-5'>
         
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
