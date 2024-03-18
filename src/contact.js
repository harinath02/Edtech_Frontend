import React from 'react'
import { useState } from 'react';

function Contact() {

 const [ data,setData] = useState({});
 function handleChange(value,field){
  setData({...data,[field]:value})
 }

  return (
    <div>
      <div
  className="mx-auto h-auto block mt-64 p-6 max-w-md rounded-lg  bg-white shadow-md dark:bg-surface-dark">
  <form>
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <input
        onChange={(e) => handleChange(e.target.value, "name")}
        type="text"
        className={'peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-0 transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'}
        id="exampleInput7"
        placeholder="Name" />
<label
  for="name"
  className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] ${data?.name ? '-translate-y-[2.15rem]' : ''} peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.5rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary`}
>
  Name
</label>

    </div>
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <input 
      onChange={(e) => handleChange(e.target.value, "email")}
        type="email"
        className={'peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'}
        id="email"
        placeholder="Email address" />
<label
  for="email"
  className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] ${data?.email ?  "-translate-y-[2.15rem]" : "" } peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary`}
>
  Email address
</label>

    </div>
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <textarea
      onChange={(e) => handleChange(e.target.value, "msg")}
        className={'peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'}
        id="msg"
        rows="3"
        placeholder="Message"></textarea>
<label
  for="msg"
  className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] ${data?.msg ? '-translate-y-[2.15rem]' : ""} peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary`}
>
  Message
</label>

    </div>
    <div
      className="mb-6 flex min-h-[1.5rem] items-center justify-center ps-[1.5rem]">
              <input
                className="relative float-left mt-2 mr-1.5 mb-0.5 h-4 w-4 rounded border-2 border-solid border-gray-500 outline-none before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:content-[''] checked:border-blue-500 checked:bg-blue-500 checked:before:opacity-0.16 checked:after:absolute checked:after:-mt-1 checked:after:ml-1 checked:after:block checked:after:h-3.25 checked:after:w-1.5 checked:after:rotate-45 checked:after:border-2 checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-0.04 hover:before:shadow-black/60 focus:shadow-none focus:transition-colors focus:before:scale-100 focus:before:opacity-0.12 focus:before:shadow-black/60 focus:before:transition-shadow"
                type="checkbox"
                value=""
                id="remember"/>
      <label
        className="inline-block ps-[0.15rem] pt-[0.15rem] hover:cursor-pointer"
        for="exampleCheck10">
        Send me a copy of this message
      </label>
    </div>
    <button
      type="submit"
      className="inline-block w-full rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal border-2 border-black text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Send
    </button>
  </form>
</div>
    </div>
  )
}

export default Contact;
