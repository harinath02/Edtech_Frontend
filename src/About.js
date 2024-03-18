import React from 'react'

function About() {
  return (
<div className='h-screen pt-24 bg-blue-200 flex justify-between'>
<div className='text-sans-pro flex flex-col items-start p-28 gap-4'>
    <h1 className='text-lg'> <h1>We  provides best Online\Offline Curated Courses for you.</h1></h1>
  <h1 className='text-sans-pro  text-4xl text-[#be6aeb]'>Welcome to the Learner's world</h1>
  <h1 className='text-2xl'>EduHub and similar Edtech firms are revolutionizing education <br/>with their comprehensive offerings of online courses, educational<br/>  products,and dynamic events, empowering learners and<br/>  cultivating a culture of lifelong learning.</h1>
   <button className='w-36 h-12 rounded-3xl text-lg'>Know more</button>
</div>
<div className='bottom-0 p-20'>
  <img src='assets\images\about_img.png' alt='img' ></img>
</div>
</div>

  )
}

export default About;
