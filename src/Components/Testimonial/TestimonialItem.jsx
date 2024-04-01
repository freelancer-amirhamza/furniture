import React from 'react'

const TestimonialItem = (emoji, des, profileImg, profileName, location) => {
  return (
    <>
        <div className='p-12 hover:bg-white border border-slate-300'>
          <div className="text-4xl">
            <img src="https://imgs.search.brave.com/56g8QfAqZ3wo8_Mz6y8bGT4Wi8heVdsTraSdeC3ifrc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wdWIt/c3RhdGljLmZvdG9y/LmNvbS9hc3NldHMv/cHJvamVjdHMvcGFn/ZXMvYmMzOTJiM2Jk/OGUzNDIyY2JiNjEx/OGQ3OGU2Zjc3YmUv/Zm90b3ItYzVkMmVk/NjIyMWFhNGQxOWE2/ZjY4NjZhYmU2Yzdh/NTAuanBn" alt="clint"
            className='h-10 w-10 object-cover flex rounded-full'
            />
          </div>
          <div className="py-5"> 
            <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
          </div>
          <div className="flex items-center justify-start my-4 gap-5">
            <div className='w-16'>
              <img className='bg-slate-200 p-2 rounded-full' src="https://i.ibb.co/z8rmhrM/perfil.png" alt="profileLogo1" />
            </div>
            <div>
              <h3 className='text-2xl font-extrabold'>Nessi</h3>
              <p>Brooklyn, NY</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default TestimonialItem