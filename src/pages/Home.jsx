
import React,  { useState, useRef ,useEffect} from 'react'

import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Carousel from './Carousel';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  

  const[click,setClick]=useState('sf')
const navigate=useNavigate()
const slides = [
  { url: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D', title: 'Slide 1' ,},
  { url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D', title: 'Slide 2' },
  { url: 'https://plus.unsplash.com/premium_photo-1663945117355-b5d596a0041b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRvd258ZW58MHx8MHx8fDA%3D', title: 'Slide 3' },
  // Add more slides as needed
];


const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;

    if (section) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100', // Animation starts when bottom of section hits bottom of viewport
          onEnter: () => {
            gsap.from(section, {
              opacity: 0,
              y: 50,
              duration: 1,
              overwrite: true // Ensures animation restarts on each scroll
            });
          },
        },
      });
    }
  }, []);

  
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Function to handle animation on intersection
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animation when text element enters the viewport
          gsap.from(textElement, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
          });
        }
      });
    };

    // Create IntersectionObserver
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Trigger animation when 50% of the element is in view
    });

    // Observe the text element
    if (textElement) {
      observer.observe(textElement);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);


  return (

    <div className=' no-scrollbar flex flex-col bg-richblack-800 no-scrollbar    justify-center text-white overflow-y-scroll overflow-x-hidden no-scrollbar'>


{/* -------------------wrapper------------------------------------------------------ */}


{/* ---------------------------------hero=--------------------------------- */}
<div className=' bg-homeBg  w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat relative flex  items-center no-scrollbar'>



<div ref={textRef} style={{ marginTop: '10vh' }}>  
<div className=' flex flex-col gap-y-9 px-48 my-5'><h1 className=' text-5xl font-extrabold text-white z-10 text-left'>Plan Your Trip With<br>
</br> Town Treasures
  </h1>
   <p className=' text-left text-lg w-96'>Join our platform and  embark your journey in town travelling.Exploring is a conversation with the planet, a kaleidoscope of cultures and landscapes that broaden your understanding of the human story.</p>
   </div>

   <button className="bg-yellow-500 hover:bg-orange-500 text-blue-950 font-semibold hover:text-white py-2 px-2 mx-48  border border-blue-500 hover:border-transparent rounded " onClick={()=> {navigate('/booking')

setClick('Sign Up')}}>
  Book Now
</button>  

</div>

</div>


{/* -------------------------------------hero-end------------------------------------------ */}


{/* ------------------------------------mid section---------------------------- */}

<div className=' flex-col w-[100vw] bg-richblack-700' >



{/* -----------------------1st----------------------------- */}
<div ref={sectionRef} style={{ height: '100vh', backgroundColor: '' }}>
<div className=' w-[100vw] h-screen  flex flex-row gap-x-12 flex-wrap justify-center items-center'>

<div  className='lg:w-[40%] md:w-[40%] sm:w-[90%] all:w-[90%] py-12 flex flex-col gap-y-10 min-w-[300px]'>

<h1 className='text-4xl text-red-400 font-extrabold text-center font-mullish overflow-x-hidden relative w-72 overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-110 mx-40'>Travel With Us</h1>

<p className='text-lg text-white text-left font-serif overflow-x-hidden relative w-100 overflow-hidden  transition-transform duration-300 transform hover:scale-110 mx-4'> A town treasurer is like a juggler, constantly keeping the balls of revenue, expenses, and debt in the air. The town treasury is not a bottomless pit, but a well that needs to be replenished with care. Embark on a journey through time and explore cities like never before. Discover hidden gems, historical landmarks, and quaint local vendors. Navigate the intricate routes of the city with our detailed maps. Find the perfect place to stay, from charming bed-and-breakfasts to luxurious hotels. Need a ride? Our taxi price comparison ensures you travel smart.</p>

<div className='flex justify-center items-center gap-x-4'>
<button className="bg-transparent hover:bg-blue-500 text-sky-600 font-semibold hover:text-white py-2 px-1 border
 border-blue-500 hover:border-transparent rounded overflow-x-hidden relative w-72 overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-110" onClick={()=> {
  navigate('/Places')
  setClick('Places')
  }}>
  Get To Know  Your City
</button>



{/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded " onClick={()=> navigate('/createPosts')}>
 Create Post
</button> */}
</div>
</div>
{/* ======================== */}

<div className="py-12 lg:w-[40%] md:w-[40%] sm:w-[90%] all:w-[110%] relative transition-transform duration-300 transform hover:scale-110">
      <Carousel slides={slides} />
      <div className="relative">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.imageUrl}
          alt={slide.altText}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}
    </div>
    </div>




</div>
</div>
{/* -----------------------1st end----------------------------- */}

{/* ---------------------------------------2nd start------------------------ */}

<div className=' w-[100vw] flex flex-row gap-x-12 flex-wrap-reverse justify-center items-center '  >



{/* <div className='lg:w-[70%] md:w-[40%] sm:w-[90%] all:w-[90%] overflow-x-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834
                        .00977790575!2d90.34924177203192!3d23.780777744485526!2m3!1f0!2f0!3f0!3m2!1i102
                        4!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1664588357584!5m2!1sen!2sbd" className='h-[100%] w-[100%]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>                 *


{/* <div  className='lg:w-[40%] md:w-[40%] sm:w-[90%] all:w-[90%] py-12 flex flex-col gap-y-10 min-w-[300px]'>

<h1 className='text-4xl text-black font-extrabold text-center'>Get Routes Of Your City</h1>

<p className='text-xl text-black text-center'> Post a request of city </p>

<div className='flex justify-center items-center gap-x-4'>
<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded " onClick={()=>{ navigate('/recieverPost')
setClick('Reciever Posts')
}}>
  Click To Get Routes
</button>

{/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded " onClick={()=> navigate('/createPosts')}>
 Create Posts
</button>]</div> */}
{/* </div>
</div> */} 
{/* ======================== */}





</div>

{/* ---------------------------------------2nd end------------------------ */}
{/* ---------------------------------------3rd start------------------------ */}



{/* ---------------------------------------3rd end------------------------ */}




</div>

{/* ------------------------------------mid end---------------------------- */}


{/* ----------------------------------foot 2 start----------------------------------- */} 
<div ref={sectionRef} style={{ height: '100vh', backgroundColor: 'lightblue' }}>
<div className='bg-[url("https://res.cloudinary.com/dby1pwcbx/image/upload/v1713082457/shaym/hzqmouw5bw0wjnqcaxap.jpg")] 
w-[100vw] h-[100vh] flex flex-col justify-start  py-32 px-6 gap-y-12   bg-cover bg-center bg-no-repeat relative'>
  <div className='mx-5 flex'>
  
<div className='w-screen lg:w-[70%] md:w-[40%] sm:w-[90%] all:w-[90%] overflow-x-hidden'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834
                        .00977790575!2d90.34924177203192!3d23.780777744485526!2m3!1f0!2f0!3f0!3m2!1i102
                        4!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1664588357584!5m2!1sen!2sbd" className='h-[100%] w-[100%]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>       
<div className='flex-none mx-10'>
<h1 className='font-extrabold text-white text-5xl my-10 w-96'>Discover city routes</h1>

<p className='font-semibold text-white text-xl my-10 w-96'>Explore your city stress-free with our concise 50-word route guide. Navigate seamlessly through attractions, dining spots, and landmarks. Discover hidden gems effortlessly. Enjoy a hassle-free journey with our city route, tailored for your convenience. Let us guide you to the best spots with ease and confidence.






</p>

<div>
<button className="bg-yellow-600 hover:bg-orange-500 text-blue-950 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded " onClick={()=> {navigate('/')

setClick('Sign Up')}}>
  Get Routes
</button>

</div>
</div></div>
</div>
</div>

{/* ----------------------------------foot 2 end----------------------------------- */}


{/* -------------------------------------foot 1 start---------------------------- */}

{/* <div className='w-[100vw] flex px-6  justify-center items-center bg-richblack-700'>


<div className='py-12  flex flex-col gap-y-8 '>

<h1 className='text-center font-extrabold text-6xl text-black'>Our Services</h1>

<p className=' text-black text-center opacity-70'>We are committed to reducing food waste and helping those in need.</p>

<div className='flex  flex-wrap w-[100vw] justify-center items-center gap-x-[2.5%] gap-y-10 lg:flex-row md:flex-col sm:flex-col all:flex-col'>




<div className='lg:w-[30%] '>

<h1 className='text-2xl text-center text-black font-semibold'>Get To Know Your </h1>

<p className='text-center opacity-70 text-green1-dark2'>We collect food left at the end of the day from hotels and restaurants.</p>
</div>


{/* ------------------------------------------------------ */}






{/* --------------------------------------foot 1 end---------------------------------- */}


{/* ----------------------footer------------------------ */}






{/* --------------------footer end-------------------------------------- */}

{/* -------------------------------------------wrapper end--------------------------- */}


    </div>
  )
}
