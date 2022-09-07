import React from 'react'
import { useState } from 'react'

const Search = ({getQuery}) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className="search">
        <form>
            <input 
                type='text' 
                value={text}
                className='form-control' 
                placeholder='Search Characters...' 
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            >
            </input>
        </form>  
    </section>
  )
}

export default Search