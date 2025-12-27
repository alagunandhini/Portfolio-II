
import { Download, Github, ExternalLink, ChevronDown } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import Projects from './Projects';
import Navbar from '../components/Navbar';
import Skills from './Skills';
import Contact from './Contact';
import Education from './Education';
import Coding from './Coding';
import Certificates from './Certificates';
import AboutMe from './AboutMe';

const Home =()=>{
const heroRef = useRef(null);
const imageRef = useRef(null);
const contentRef = useRef(null);

 useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
    return(
        <>
        
        
              <section  ref={heroRef} className=" hero min-h-[100vh] relative bg-slate-50 overflow-hidden  p-4 sm:p-8" id="home">
                       <div className="absolute top-20 left-20 w-72 h-72 bg-sky-200/60 rounded-full blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200/60 rounded-full blur-[140px]" />
                <Navbar/>
        <div className=" flex justify-center items-center ">
          
            {/* navbar */}
        

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              
                      {/* Profile Image Section */}
              <div 
                ref={imageRef}
                className="flex justify-center lg:justify-start opacity-0 transform translate-y-8 transition-all duration-1000 relative lg:mx-0 mt-0 "
              >
                <div className="relative group profile-container">
              
                  {/* Main Profile Container */}
                  <div className="relative bg-gradient-to-br from-sky-300/60 to-blue-400/50 backdrop-blur-sm p-8 rounded-full border-2 border-sky-200/60 shadow-2xl group-hover:shadow-sky-300/50 transition-all duration-500 profile-frame mx-0 md:mx-0 lg:mx-30 ">
                    <img 
                      src="me1.jpg"
                      alt="Alagu Nandhini"
                      className=" w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl  transition-all duration-700 scale-110 group-hover:rotate-3 profile-image"
                    />
                    
                    {/* Overlay Effect */}
                    <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Status Indicator */}
                  {/* <div className="absolute bottom-8 right-8 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-sky-200/50 status-indicator">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700"> heyyy Trust the Process !</span>
                  </div> */}
                </div>
              </div>

          

                <div className=" flex flex-col  justify-center gap-2 p-10 md:p-0">
                    {/* <h1 className=" font-extrabold text-4xl text-gray-600 "><span className="text-5xl">Hi, </span> I'm Alagu Nandhini</h1>
                    <p className="text-gray-400 text-md mb-4">I'm an enthusiastic Full Stack Developer with a strong interest in building user-friendly and responsive websites.I have hands-on experience with the MERN stack and enjoy working on both frontend and<br/> backend development.</p>
                    <div className="flex gap-4 justify-center pr-35"> */}

                    <div 
                ref={contentRef}
                className="flex flex-col justify-center text-center lg:text-left opacity-0 transform translate-y-8 transition-all duration-1000 delay-300 "
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-blue-400 text-lg font-medium tracking-wide uppercase">
                      Full Stack Developer
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-gray-600 leading-tight">
                      <span className="text-xl text-gray-600">
                        Hi,
                      </span>
                      <br />
                      I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-sky-500">
                        Alagu Nandhini
                      </span>
                    </h1>
                  </div>

                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl">
                    An enthusiastic Full Stack Developer with a strong interest in building 
                    user-friendly and responsive websites. I have hands-on experience with 
                    the MERN stack and enjoy working on both frontend and backend development.
                  </p>
                  </div>
                      
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8 mb-10 sm:mb-0">
                   <a
  href="/Alagu_Nandhini_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto"
>
  <button className="group relative inline-flex items-center justify-center 
    px-6 sm:px-8 py-3 sm:py-4 
    text-white font-semibold rounded-full 
    overflow-hidden transition-all duration-300 
    hover:scale-105 bg-blue-400 hover:bg-blue-500 
    shadow-lg hover:shadow-xl w-full sm:w-auto">
    
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <Download className="relative mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
    <span className="relative">Resume</span>
  </button>
</a>


                    <a href="https://github.com/alagunandhini" target="_blank" className="w-full sm:w-auto">

                    <button className="group relative inline-flex items-center justify-center 
    px-6 sm:px-8 py-3 sm:py-4 
    text-white font-semibold rounded-full 
    overflow-hidden transition-all duration-300 
    hover:scale-105 bg-sky-300 hover:bg-sky-400 
    shadow-lg hover:shadow-xl w-full sm:w-auto">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Github className="relative mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative">Github</span>
                    </button>
                    </a>
                
                  </div>
                    </div>

                </div>


             

            </div>
            
            


        </div>
         </section>
       
         <Skills/>
          
    <Projects/>
   

    <Certificates/>
    <Education/>
    <Contact/>
        
        </>
    )

}
export default Home;