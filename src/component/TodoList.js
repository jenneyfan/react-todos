import React,{Component} from 'react';
import TodoItem from './TodoItem';
import TodoData from '../api/todoData';
import eventEmitter from './eventEmitter';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:TodoData.todos,
            checkAll:false
        }
    }

    /**
     * 点击全选
     */
    handleClick(){
        let flag = !this.state.checkAll;
        this.setState({
            checkAll:flag
        });
        eventEmitter.emit('checkAll',flag);
    }

    componentDidMount(){
        eventEmitter.emit('leftTodos',this.state.data);
    }

    render(){
        return(
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" onClick={()=>this.handleClick()} />
                <label htmlFor="toggle-all"></label>
                <TodoItem
                    data={this.state.data}
                    eventEmitter={eventEmitter}
                >
                </TodoItem>
            </section>
        )
    }
}
export default TodoList;