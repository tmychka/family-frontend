import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {  
   
      state = {
         isEdit: false,
         value: this.props.label,
   
      }
   
      onLabelClick = () => {
         this.props.onDone();
      };

      onEdit = () => {
         this.setState({ isEdit: true });
      }

      onChange = (e) => {
         this.setState({
            value: e.target.value
         });
      }

      render() {
         const { label, onDeleted, done } = this.props;
         let classNames = 'todo-list-item';
 
      if(done) {
         classNames += ' done';
      }

    


      if(this.state.isEdit) {
          return ( 
                 <input onChange={this.onChange}
                        value={this.state.value}
                        className={'edit__input'}  
                        autoFocus
                  />
              )       
      } 

        let clazz = 'bi bi-check2-square chex'
        if(done) {
           clazz += ' chexi'
       }

       let crazzy = 'fa fa-trash-o o'

       if(done) {
         crazzy += ' crazy'
     }

     
        return (
   
           <span className={classNames}>
             <span
                 className='todo-list-item-label'
                 onClick={ this.onLabelClick }>
                  <svg className={clazz} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                       <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                       <path d="M8.354 10.354l7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                  </svg>
                {label}
             </span>
               
             <button type='button'
                     className='btn btn-success btn-sm float-right'
                     onClick={this.onEdit}>
                  <i className="bi bi-pencil-square" />
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                   <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                   <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
             </svg>
             </button>
               
             <button type='button'
                     className='btn btn-outline-danger btn-sm float-right'
                     onClick={onDeleted}>
                  <i className={crazzy} />
             </button>
          </span>
      );
   };
}


