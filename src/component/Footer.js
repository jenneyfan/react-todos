import React,{Component} from 'react';
import eventEmitter from './eventEmitter';
class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            left:0
        }
    }
    handleClick(e){
        let filterType = e.target.innerHTML;
        switch (filterType){
            case 'All':
                break;
            default:
                break;
        }
    }
    componentDidMount(){
        eventEmitter.on('leftTodos',(obj)=>{
            let leftArr = obj.filter(item => item.completed === true);
            this.setState({
                left:obj.length - leftArr.length
            })
        });
    }

    render(){
        return(
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.state.left}</strong>
                    <span> </span>
                    <span>items</span>
                    <span> left</span>
                </span>
                <ul className="filters" onClick={(e)=>this.handleClick(e)}>
                    <li>
                        <a href="#/" className="selected">
                            All
                        </a>
                    </li>
                    <li>
                        <a href="#/active" className="">
                            Active
                        </a>
                    </li>
                    <li>
                        <a href="#/completed" className="">
                            Completed
                        </a>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}
export default Footer;