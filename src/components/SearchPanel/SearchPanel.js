import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
  
  state = {
     term: ''
  };

  onSearchChange = (e) =>  {
     const term = e.target.value;
     this.setState({ term });
     this.props.onSearchChange(term);
  }
   

   render() {

     return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-search search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input
             className='input'
             placeholder=' find a task' 
             value={this.state.term}
             onChange={this.onSearchChange}
              /> 
        </div>
     )
        
    }  
}