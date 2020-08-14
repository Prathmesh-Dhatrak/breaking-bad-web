import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header'
import CharacterGride from './components/characters/CharacterGride'
import Search from './components/ui/Search'
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [query, setQuery] = useState('');

  useEffect (() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);

      setItems(result.data)
      setIsLoding(false)
    }
    fetchItems()
  },[query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGride items={items} isLoding={isLoding}/>
    </div>
  );
}

export default App;
