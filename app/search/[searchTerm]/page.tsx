import React from 'react'
import { PageProps } from '../../todos/[todoId]/page'

type SearchResultsProps = {
  organicResults: [
    {
      title: string
      link: string
      position: number
      thumbnail: string
      snippet: string
    }
  ]
}

const search = async (searchTerm: string) => {
  const response = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`);
  const searchResults = await response.json();
  return searchResults;
}

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm as string)
  return (
    <div>
      <h1>Search Results for {searchTerm}</h1>
      <ol className='space-y-5'>
        {searchResults.organic_results.map((result: 
        { position: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; link: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; snippet: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => (
          <li key={result.position} className='list-decimal'>
            <p className='text-xl font-bold'>{result.title}</p>
            <p className='text-sm'>{result.link}</p>
            <p className='text-sm'>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SearchResults