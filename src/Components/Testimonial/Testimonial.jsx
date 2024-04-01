import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoMdStar } from "react-icons/io";
// import TestimonialItem from './TestimonialItem';

const Testimonial = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const items = [
    {
      id: 1,
      name: 'Edward Cisneros',
      address: 'California, USA ',
      text:'"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"',
      image:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: 'Johny',
      address: 'California, USA ',
      text:'"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"',
      image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: 'Alina',
      address: 'California, USA ',
      text:'"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"',
      image:"https://imgs.search.brave.com/56g8QfAqZ3wo8_Mz6y8bGT4Wi8heVdsTraSdeC3ifrc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wdWIt/c3RhdGljLmZvdG9y/LmNvbS9hc3NldHMv/cHJvamVjdHMvcGFn/ZXMvYmMzOTJiM2Jk/OGUzNDIyY2JiNjEx/OGQ3OGU2Zjc3YmUv/Zm90b3ItYzVkMmVk/NjIyMWFhNGQxOWE2/ZjY4NjZhYmU2Yzdh/NTAuanBn"
    },
    

  ]

  return (
    <>
      <section className='bg-[#F6F6F6] py-28'>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto my-3">
          <dir className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
            <h2 className='text-5xl font-bold leading-tight'> Words from our customers</h2>

            {/* <div className='flex justify-end items-center gap-5 '>
                  <span className=' p-3 rounded-full border text-lg cursor-pointer text-gray-500 hover:text-gray-800 hover:bg-white border-gray-400'>
                    <AiOutlineArrowLeft />
                  </span>
                  <span className=' p-3 rounded-full border text-lg cursor-pointer text-gray-500 hover:text-gray-800 hover:bg-white border-gray-400'>
                    <AiOutlineArrowRight />
                  </span>
              </div> */}

          </dir>
          <div className='my-8'>
            <div className='w-full'>

              <Carousel infinite={true} autoPlay={true} autoPlaySpeed={3000} responsive={responsive}>
                {items.map(({id, name, image, text, address}) => {
                  return(
                    <div key={id} className='shadow-md bg-white shadow-slate-200 p-12 cursor-pointer  m-2'>
                  <div className="flex items-center justify-start my-4 gap-5">
                    <div className='w-20 h-20'>
                      <img className='bg-slate-200 p-2 w-full h-full object-cover rounded-full' src={image} alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>{name} </h3>
                      <p>{address} </p>
                      <div className="text-orange-400 flex text-xl ">
                    <IoMdStar  />
                    <IoMdStar  />
                    <IoMdStar  />
                    <IoMdStar  />
                    <IoMdStar  />
                    </div>
                    </div>
                  </div>
                  <div className="py-5">
                    <p className='text-lg '> {text} </p>
                  </div>
                </div>
                  )
                })}
                
              </Carousel>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Testimonial