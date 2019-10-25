import React, { Component } from 'react';

export default class Todolist extends Component
{
  constructor()
  {
    this.state={value:[ ],
    textval:""
    };
    //event binding
    this.handleAddToDoItem=this.handleAddToDoItem.bind(this);
    this.handleChange=this.handleChange.bind(this);
      
  }
      handleChange(e){
            this.setState({textval: e.target.value });

      }
       


   handleAddToDoItem()
   {
    //  adding data
      this.state.value.push(this.state.textval );
      this.setState(this.state);
   }   

  


  render()
  {
    return(
    <div>
      <input type='text' placeholder="Enter item text" onChange={this.handleChange} />
      <button onClick={this.handleAddToDoItem}>Add Item </button>
      {this.state.value.map((result) => (
        <div>
        <p> {result} </p>
        </div>
    ))}

      
{
  // map code goes here

  
}


    </div>
    );
  }
}
// also extend 