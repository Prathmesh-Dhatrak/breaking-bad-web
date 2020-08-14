import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spenner'
import Spenner from '../ui/Spenner'

const CharacterGride = ({items, isLoding}) => {
    return isLoding ? (<Spenner/>) : (<section className="cards">
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>) 
}

export default CharacterGride
