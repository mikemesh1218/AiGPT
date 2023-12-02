import React from 'react'
import {logo} from '../assets'

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex flex-col justify-between sm:flex-row items-center w-full mb-10 pt-3'>
            <img src={logo} alt='summrizer_logo' className='w-28 object-contain'/>
            <button type='button' onClick={()=>{window.open("https://github.com/mikemesh1218/AiGPT.git")}} className='black_btn'>Github</button>
        </nav>
        <h1 className='head_text'>Summrize your essay with <br className='max-md:hidden'/><span className='orange_gradient'>OpenAI GPT-4</span></h1>
        <h2 className='desc'>Transform your lengthy essay into clear and concise summaries</h2>
    </header>
  )
}

export default Hero