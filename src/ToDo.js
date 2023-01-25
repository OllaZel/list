import { Component } from "react";
import circle from './circle.png';
import complete from './complete.png';

export class ToDo extends Component {

    state = {
        userInput: '',
        toDoList: [],
        image: circle
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
        alert("Необходимо заполнить поле!")
        }
        else {
        let list = this.state.toDoList;
        list.push(input);
        this.setState({toDoList: list, userInput: '' })
        }
    }   

    clickedWord(event) {
        const li = event.target;
        li.classList.toggle('clicked'); 
        this.setState({image: complete})       
    }

    deleteItem() {
        let list = this.state.toDoList;
        list = [];
        this.setState({toDoList: list})

    }

    onFormSubmit(e) {
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                <input
                placeholder="Запиши свое новое дело"
                type="text"
                onChange={ (e) => {this.onChangeEvent(e.target.value)}}
                />
            </div>

            <div className="container">
                <button onClick={ () => {this.addItem(this.state.userInput)}}> + </button>
                <button onClick={ () => this.deleteItem() }> -  </button>
            </div>

            <ol>
                {this.state.toDoList.map((item, index) => (
                <li onClick={this.clickedWord} key="index"> 
                <img src={complete} alt="circle" width="20px"/> 
                { item } 
                </li>))}
            </ol>
                </form>
            </div>
        )
    }
}