import React, { Component } from 'react'
import Button from '../components/Button';
import InputValue from '../components/InputValue';

import logo from '../logo.svg';
import './App.css';

export default class TodosScreen extends Component {

    state={
        todos:[],
        newTodo:''
    }

    setNewTodo = (todo) =>{
        this.setState({...this.state,newTodo:todo})
    }

    addTodointoList = async() =>{
        if(this.state.newTodo){
            await this.setState({...this.state,todos:[...this.state.todos,{id:this.state.todos.length,task:this.state.newTodo}]})
            this.setState({...this.state,newTodo:''})
        }
    }

    //extra :)
    removeFromList = (id) => {
        const filteredTodos= this.state.todos.filter(todo => todo.id !== id)
        this.setState({...this.state,todos:filteredTodos})
    }

  render() {
    return (
        <div className="App App-header">
           <h1>Todo App</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <form >
            <InputValue
                title='Add new todo'
                value={this.state.newTodo}
                setValue={this.setNewTodo}
            />
            
            <Button
                handleClick={this.addTodointoList}
                title='Add new todo'
                type='submit'
            />
            </form>
           {
               this.state.todos.map(todo=>(
                   <div key={todo.id} className='d-flex justify-content-between mt-4' >
                       <p>{todo.task}</p>
                       <button className='btn btn-danger mx-2' onClick={()=>this.removeFromList(todo.id) } >x</button>
                   </div>
               ))
           }
        </div>
    )
  }
}
