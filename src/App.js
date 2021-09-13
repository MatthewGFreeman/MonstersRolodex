import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IsConstructor } from 'es-abstract';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters: [
        {
          name: 'Frankenstein',
          id: '1'
        },
        {
          name: 'Dracula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        },
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key ={monster.id}> { monster.name } </h1>)
        }
      </div>
    );
  }
}

export default App;
