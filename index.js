import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Cards from './Cards';

class App extends Component {

  state={person:[{name:'joy',email:';sdzfzd@ddf'}, 
  {name:'joy',email:';sdzfzd@ddf'}
  ]}
  constructor() {
    this.state={person:[{name:'joy',email:';sdzfzd@ddf'}, 
  {name:'joy',email:';sdzfzd@ddf'}
  ]}

    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Cards name={this.state.person[0].name} email={this.state.person[1].email} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
