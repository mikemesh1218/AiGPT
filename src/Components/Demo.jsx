import React from 'react'
import { useEffect,useState } from 'react'
import {copy, loader, tick, linkIcon} from '../assets'
import {useLazyGetSummaryQuery} from '../services/article';


function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await getSummary({ articleUrl: article.url });
      console.log('API Response:', data);
  
      if (data && data.summary) {
        setArticle((prevArticle) => ({ ...prevArticle, summary: data.summary }));
      } 
    } catch (error) {
      console.error('Error fetching summary:', error);
    }
  }
  
  console.log(article);
  
  
  
  
  
  
  return (
    <section className='mt-16 w-full max-w-xl '>
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center ' onSubmit={handleSubmit}>
           <input type='url' placeholder='Paste your URL' value={article.url} onChange={(e) => setArticle({...article, url:e.target.value})} required className='url_input peer'/>
           <img src={linkIcon} alt='link_ion' className='absolute left-0 my-2 ml-2 w-5'/>
           <button type='sumit' className='submit_btn peer-focus: border-gray-700 peer-focus:text-gray-700'>Go</button>
        </form>
         {/* {Browse history} */}
      </div>
      {/* {display results} */}
    </section>
  )
}

export default Demo