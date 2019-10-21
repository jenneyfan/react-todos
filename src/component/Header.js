import React,{Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            todoTxt:''
        }
    }

    /**
     * 输入框数据改变时改变组件状态
     */
    handleChange(e){
        this.setState({
            todoTxt:e.target.value
        });
    }
    /**
     * 按Enter键之后发射数据，重置数据框及组件状态
     */
    handleKeyDown(e){
        if(e.keyCode===13){
            this.props.eventEmitter.emit('addTodos',this.state);
            e.target.value='';
            this.setState({
                todoTxt:''
            });
        }
    }

    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={(e)=>this.handleChange(e)}
                    onKeyDown={(e)=>this.handleKeyDown(e)}
                />
            </header>
        )
    }
}
export default Header;