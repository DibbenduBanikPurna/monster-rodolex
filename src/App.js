import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import Search from './components/search-field/search.component'
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      isField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render(){
    const {monsters,isField}=this.state
    const filterMonsters=monsters.filter(monsters=>
      monsters.name.toLowerCase().includes(isField.toLowerCase())
      )
    return(
      <div className="App">
        <h1>Monster Rodolex</h1>
       
        <Search
        placeholder="monsters Name"
        handleChange={(e)=>this.setState({isField:e.target.value})}

        />
      <CardList monsters={filterMonsters}/>
      </div>
    )
  }
}


export default App;
