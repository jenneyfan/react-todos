import React,{Component} from 'react';
import TodoItem from './TodoItem';
import eventEmitter from './eventEmitter';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
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

    render(){
        return(
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" onClick={()=>this.handleClick()} />
                <label htmlFor="toggle-all"></label>
                <TodoItem data={this.state.data}></TodoItem>
            </section>
        )
    }
}
export default TodoList;