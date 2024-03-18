import React from 'react'

function Landing() {
  return (
    <div className='h-screen pt-36 bg-blue-200 flex justify-between'>
      <div className='text-sans-pro flex flex-col items-start p-32 gap-4'>
          <h1 className='text-lg'>Want to Learn ?</h1>
        <h1 className='text-sans-pro  text-4xl text-[#be6aeb]'>Welcome to the Learner's world</h1>
        <h1 className='text-2xl'>Online Certificate Courses: Learn On India's <br></br>  Top Learning Platform</h1>
         <button className='w-36 h-12 rounded-3xl text-lg'>Know more</button>
      </div>
      <div className='bottom-0'>
        <img src='assets\images\hero.png' alt='img' ></img>
      </div>
    </div>
  )
}

export default Landing
