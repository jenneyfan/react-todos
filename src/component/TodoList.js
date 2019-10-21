import React,{Component} from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
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
        this.props.eventEmitter.emit('checkAll',flag);
    }

    render(){
        return(
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" onClick={()=>this.handleClick()} />
                <label for="toggle-all"></label>
                <TodoItem eventEmitter={this.props.eventEmitter}></TodoItem>
            </section>
        )
    }
}
export default TodoList;