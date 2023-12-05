import React from 'react'
import Mike from '../assets/Mike.jpg'

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex flex-col justify-between sm:flex-row items-center w-full mb-10 pt-3'>
            <img src={Mike} alt='summrizer_logo' className='w-28 object-contain max-w-[10%] max-h-[10%]'/>
            <button type='button' onClick={()=>{window.open("https://github.com/mikemesh1218/AiGPT.git")}} className='black_btn'>Github</button>
        </nav>
        <h1 className='head_text'>Summrize your essay with <br className='max-md:hidden'/><span className='orange_gradient'>OpenAI GPT-4</span></h1>
        <h2 className='desc'>Transform your lengthy essay into clear and concise summaries</h2>
    </header>
  )
}

export default Hero