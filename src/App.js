import React, { Component } from 'react';
import Header from './component/Header';
import TodoList from './component/TodoList';
import Footer from './component/Footer';
import './index.css';
const EventEmitter = require('events').EventEmitter;
class App extends Component {
    constructor(props){
        super(props);
        this.eventEmitter = new EventEmitter();
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header eventEmitter = {this.eventEmitter}  />
                    <TodoList eventEmitter = {this.eventEmitter}></TodoList>
                    <Footer eventEmitter = {this.eventEmitter} />
                </section>
            </div>
        );
    }
}
export default App;
