import React, { useState } from 'react';
import { linkIcon } from '../assets';
import { useEffect } from 'react';
// import { useLazyGetSummaryQuery } from '../services/article';
import axios from 'axios';  // Import axios directly
import { copy } from '../assets';

function Demo() {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });


  const [allArticles, setAllArticles] = useState([]);

  // const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(()=>{
    const articleFromLocalStroage = JSON.parse(
      localStorage.getItem('articles')
    )
    if(articleFromLocalStroage){
      setAllArticles(articleFromLocalStroage)
    }
  },[])
   

  useEffect(() => {
    console.log(article);
  }, [article.summary]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: article.url,
        length: '3',
      },
      headers: {
        'X-RapidAPI-Key': '0b740965f4mshdc2f01dfa024bbcp16200fjsnca4c1aafd3e3',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
  
      if (response.data) {
        
         const newArticle = {...article, summary: response.data}
         setArticle(newArticle);

         const updatedAllArticles = [newArticle, ...allArticles]
         setAllArticles(updatedAllArticles);

         localStorage.setItem('articles', JSON.stringify(updatedAllArticles));



      } else {
        console.error('Invalid response data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching summary:', error);
    }
  };
    
  

  return (
    <section className='mt-16 w-full max-w-xl '>
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center ' onSubmit={handleSubmit}>
          <input
            type='url'
            placeholder='Paste your URL'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className='url_input peer'
          />
          <img src={linkIcon} alt='link_icon' className='absolute left-0 my-2 ml-2 w-5' />
          <button type='submit' className='submit_btn peer-focus: border-gray-700 peer-focus:text-gray-700'>
            Go
          </button>
        </form>
        <div className='flex flex-col w-full gap-2 max-h-60 overflow-y-auto'>
            {allArticles.map((item, index)=>(
              <div className='link_card' key={`link-${index}`} onClick={()=>setArticle(item)}>
                 <div className='copy_btn'>
                    <img src={copy} alt='copy_icon' className='w-[40%] h-[40%] object-contain'/>
                 </div>
                 <p className='flex-1 font-satoshi text-purple-700 text-sm '>{item.url}</p>
              </div>
            ))}
        </div>
      </div>
      {/* Display summary */}
      <div className='my-10 max-w-full flex justify-center items-center'>
       {article.summary && (
        <div className='summary_div'>
          <div className='summary_box'>
           <h2 className='blue_gradient'>Summary:</h2>
           <p>{article.summary.summary}</p>
          </div>
        </div>
       )}
      </div>

    </section>
  );
}

export default Demo;
