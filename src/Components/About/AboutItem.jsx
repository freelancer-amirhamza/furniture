import React from 'react'

const AboutItem = ({orderOne='order-1', orderTwo='order-2'}) => {
    
  return (
    <>
        <div className={orderOne}>
            <img className='w-full p-3 rounded-3xl ' src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" />
        </div>
        <div className={orderTwo}>
            <h2 className='text-5xl font-bold leading-tight'>The Coffee Table</h2>
            <p className='my-5'>lorem ipsum dolor sit amet consectetur adipiscing elit urna gravida interdum natoque, nec orci himenaeos aliquam eleifend senectus feugiat placerat fringilla et, nam felis porttitor egestas aptent augue sed arcu mi ligula. Ultricies sed congue fames dictum suscipit eros cum, tellus primis phasellus blandit vitae litora, dapibus odio praesent pellentesque convallis curabitur. Luctus suscipit nisi eu nec risus rhoncus condimentum mus senectus felis ac pharetra, ulus vel libero egestas curae cubilia integer rutrum sollicitudin.</p>
            
            <a className='bg-[#492705] text-white px-11 py-3 inline-block' href="https://www.linkedin.com/in/mahadidev7/"> Shop Now</a>
        </div>
    </>
  )
}

export default AboutItem