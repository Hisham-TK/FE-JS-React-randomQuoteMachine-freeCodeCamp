import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quoteApi = createApi({
  reducerPath: 'quoteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.api-ninjas.com/v1',
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_NINJAS_KEY,
    },
    jsonContentType: 'application/json',
  }),
  endpoints: (builder) => ({
    randomQuote: builder.query({
      query: (category = 'happiness') => '/quotes?category=' + category,
      transformResponse: (quoteDate) => ({ quote: quoteDate[0].quote, author: quoteDate[0].author }),
    }),
  }),
});

export const { useRandomQuoteQuery } = quoteApi;
