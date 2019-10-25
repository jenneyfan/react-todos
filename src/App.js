import React, { Component } from 'react';
import Header from './component/Header';
import TodoList from './component/TodoList';
import Footer from './component/Footer';
import TodoData from './api/todoData';
import './index.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data:TodoData.todos,
            filterClass:['selected','','']
        }
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header />
                    <TodoList data={this.state.data}></TodoList>
                    <Footer data={this.state.data} filterClass={this.state.filterClass} />
                </section>
            </div>
        );
    }
}
export default App;