import React, { Component } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemAddForm from '../ItemAddForm/ItemAddForm'

import './App.css';

export default class App extends Component {

  maxId = 100;     

    state = {
       TodoData: [
           this.createTodoItem('Drink Coffee'),
           this.createTodoItem('Make Awesome App'),
           this.createTodoItem('Have a lunch')
                     ],
       term: '',
       filter: 'all' // active, all, done  
     };

     createTodoItem(label) {
         return {
             label,
             important: false,
             done: false,
             id: this.maxId++

         }
     }

    deleteItem = (id) => {
        this.setState(({ TodoData }) => {
        const idx = TodoData.findIndex((el) => el.id == id) 
           
        const newArray = [
            ...TodoData.splice(0, idx),
            ...TodoData.splice(idx + 1)
        ]; 

        return {
            TodoData: newArray
         };
    });
};
    
     addItem = (text) => {
        const newItem = this.createTodoItem(text);     

        if (text.trim() == '') {
            return
         }

        this.setState(({ TodoData }) => {   
           const newArr = [
              ...TodoData,
                 newItem
            ];

            return {
                 TodoData: newArr
             };
         });
     };

     onSearchChange = (term) => {   
         this.setState( { term } );         
     };

     onFilterChange = (filter) => {
        this.setState( { filter } );
    };


     search(items, term) {
         if(term.length == 0) {
            return items;
         };

       return items.filter((item) => {
            return item.label
                   .toLowerCase()
                   .indexOf(term.toLowerCase()) > -1;
        });
     }  

    filter(items, filter) {
        switch(filter) {
            case 'all': 
              return items;
            case 'active':
              return items.filter((item) => !item.done);
            case 'done':
              return items.filter((item) => item.done);
            default: 
              return items;
         };
     };

     render () {
         const { TodoData, term, filter } = this.state;
         const visibleItems = this.filter(
                              this.search(TodoData, term), filter);

        return (
            <div className='todo-app'>
                 <AppHeader />
                 <ItemAddForm onItemAdded={this.addItem} />    
                 <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />                                                                                          
            <div className='top-panel d-flex'>  
            </div>
                 <TodoList 
                 todos={visibleItems}
                 onDeleted={ this.deleteItem } />
                 <SearchPanel onSearchChange={this.onSearchChange} />
            </div>
         );
     };
};

