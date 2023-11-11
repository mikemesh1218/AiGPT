import React from 'react'
import { useEffect,useState } from 'react'
import {copy, loader, tick, linkIcon} from '../assets'


function Demo() {
   const [article, setArticle] = useState({
    url:"",
    summary:""
   });

   const handleSubmit = async (e) => {
      alert("Submitted")
   }
  
  
  
  
  
  
  
  return (
    <section className='mt-16 w-full max-w-xl '>
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center ' onSubmit={handleSubmit}>
           <input type='url' placeholder='Paste your URL' value={article.url} onChange={(e) => setArticle({...article, url:e.target.value})} required className='url_input peer'/>
           <img src={linkIcon} alt='link_ion' className='absolute left-0 my-2 ml-2 w-5'/>
           <button type='sumit' className='submit_btn peer-focus: border-gray-700 peer-focus:text-gray-700'>Go</button>
        </form>

      </div>
    </section>
  )
}

export default Demo