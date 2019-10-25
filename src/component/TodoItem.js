import React,{Component} from 'react';
import eventEmitter from './eventEmitter';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data
        }
    }

    /**
     * 添加数据
     */
    addTodoData(txt){
        let arr = this.state.data;
        arr.push({
            completed:false,
            title:txt
        });
        this.setState({
            data:arr
        });
    }

    /**
     * 切换选中状态
     */
    toggleChk(e){
        let chk = e.target.checked;
        let id = parseInt(e.target.id);
        let arr = this.state.data;
        arr.forEach((item,index)=>{
            if(index===id){
                item.completed = chk;
            }
        });
        this.setState({
            data:arr
        });
        eventEmitter.emit('leftTodos', this.state.data);
    }
    /**
     * 处理数据总线上的事件
     */
    componentDidMount(){
        // 添加数据
        eventEmitter.on('addTodos', (obj) =>{
            this.addTodoData(obj.todoTxt);
        });

        //全选
        eventEmitter.on('checkAll',(flag)=>{
            let arr = this.state.data;
            arr.forEach((item)=>{
                item.completed = flag;
            });
            this.setState({
                flag:flag,
                data:arr
            });
            eventEmitter.emit('leftTodos', this.state.data);
        });
    }

    render(){
        let list = this.state.data.map((item,index)=>
            <li key={index} className={item.completed===true?"completed":""}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={item.completed}
                        id = {index}
                        onChange={(e)=>this.toggleChk(e)}
                    />
                    <label>{item.title}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="{item.title}" />
            </li>
        );
        return(
            <ul className="todo-list">{list}</ul>
        )
    }
}
export default TodoItem;