import React,{Component} from 'react'
class Footer extends Component{
    render(){
        return(
            <footer className="footer" data-reactid=".0.2">
                <span className="todo-count" data-reactid=".0.2.0">
                    <strong>2</strong>
                    <span> </span>
                    <span>items</span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    <li><a href="#/" className="selected">All</a></li>
                    <span> </span>
                    <li><a href="#/active" className="">Active</a></li>
                    <span> </span>
                    <li><a href="#/completed" className="">Completed</a></li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}
export default Footer;