import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({items, isLoading}) => {
  return isLoading ? (<Spinner />) : 
    ( <section className='cards'>
        {items.map(item => (
            //you can set the h1 tag to output the item.name before setting the characterItem component and parsing the item as prop
            <CharacterItem key={item.char_id} item={item}></CharacterItem> 
        ))}
    </section>
  )
}

export default CharacterGrid