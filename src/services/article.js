import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

// const rapidApiKey = meta.env.VITE_RAPID_API_ARTICLE_KEY;





export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) =>{
        headers.set('X-RapidAPI-Key', '0b740965f4mshdc2f01dfa024bbcp16200fjsnca4c1aafd3e3')
        headers.set('X-RapidAPI-Host', 'https://article-extractor-and-summarizer.p.rapidapi.com')


        return headers;
       }

    }),
    endpoints:(builder) => ({
        getSummary: builder.query({
            query:(params) => `/summarize?url=${encodeURI(params.articleUrl)}&length=2`
        })
    })

});

export const {useLazyGetSummaryQuery} = articleApi;