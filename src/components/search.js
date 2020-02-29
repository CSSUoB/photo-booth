import React, { useState } from "react"
import { navigate } from "gatsby"

const Search = () => {
  const [search, setSearch] = useState("")

  function submit(event) {
    event.preventDefault()

    navigate("/app/strip/" + search)
  }
  
  return (
    <form onSubmit={submit} className="md:text-xl">
      <input type="text" value={search} onChange={e => setSearch(e.target.value)}
             placeholder="Enter your code..."
             className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 inline-block m-2 md:my-0" />
      <input type="submit" value="Go"
             className="bg-white hover:bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 inline-block m-2 md:my-0" />
    </form>
  )
}

export default Search
