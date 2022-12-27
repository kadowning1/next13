'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'

interface SearchProps {
  children: React.ReactNode
}

const SearchPage = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    setSearch(''); // clear search input
    router.push(`/search/${search}`) // navigate to search page
  }

  return (
    <form onSubmit={handleSearch} className='bg-red-600'>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter Search Term"
      />
      <button type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'>
        Search
      </button>
    </form>
  )
}

export default SearchPage