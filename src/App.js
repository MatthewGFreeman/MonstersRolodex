import { Component } from 'react';
import {Cardlist} from './components/card-list/card-list.component'
import './App.css';

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

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    return (
      <div className="App">
        <Cardlist monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
