import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list"
import { SearchBox } from "./components/search-box/search-box"
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [

      ],
    };
  }
  Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }))
  }
  handelEvent = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox type="search" placeHolder="search monsters" handelEvent={this.handelEvent} />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div >
    );
  }
}

export default App;
