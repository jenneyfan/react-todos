import React, { Component } from 'react';
import Header from './component/Header';
import TodoList from './component/TodoList';
import Footer from './component/Footer';
import './index.css';
class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header />
                    <TodoList></TodoList>
                    <Footer />
                </section>
            </div>
        );
    }
}
export default App;
