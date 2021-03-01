import React, { Component } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {
      onLabelClick = () => {
         this.props.onDone();
      };

    render() {
       const { label, onDeleted, done } = this.props;

       let classNames = 'todo-list-item';

       if(done) {
         classNames += ' done';
       }

        return (
           <span className={classNames}>
             <span
                className='todo-list-item-label'
                onClick={ this.onLabelClick }>
                {label}
             </span>

            <button type='button'
                    className='btn btn-outline-danger btn-sm float-right'
                    onClick={onDeleted}>
                 <i className='fa fa-trash-o' />
               </button>
            </span>
         );
      };
   }


