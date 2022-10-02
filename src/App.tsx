import { useState, useEffect, ChangeEvent } from 'react';
import { getData } from './util/util';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


export type monster = {
  id : number,
  name : string,
  email: string
}
const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

 
  useEffect(() => {

    const fetchMonsters = async () => {
      const monsters = await getData<monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(monsters)
    }
    fetchMonsters()
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event : ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
