import React,{Component} from 'react';
import eventEmitter from './eventEmitter';
class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            filterClass:this.props.filterClass,
            showClear:{display:'block'},
            left:0
        }
    }

    /**
     * 初始化底部数据
     */
    initData(obj){
        let initLeftArr = obj.filter(item => item.completed === false);
        let comArrLen = obj.length - initLeftArr.length;
        let display = comArrLen == 0 ? 'none' : 'block';
        this.setState({
            showClear:{display:display},
            left:initLeftArr.length,
        });
    }

    /**
     * 条件过滤
     */
    handleClick(e){
        let filterType = e.target.innerHTML;
        let filterArr = [];
        let filterClass = this.props.filterClass;
        switch (filterType){
            case 'All':
                filterArr = this.props.data;
                filterClass = ['selected','',''];
                break;
            case 'Active':
                filterArr = this.props.data.filter(item => item.completed === false);
                filterClass = ['','selected',''];
                break;
            case 'Completed':
                filterArr = this.props.data.filter(item => item.completed === true);
                filterClass = ['','','selected'];
                break;
        }
        this.setState({
            filterClass:filterClass
        });
        eventEmitter.emit('filterTodos',filterArr);
    }

    /**
     * 清除已完成的
     */
    clear(){
        eventEmitter.emit('clear',this.state.data);
    }

    componentDidMount(){
        this.initData(this.state.data);
        eventEmitter.on('leftTodos',(obj)=>{
            this.initData(obj);
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
                        <a href="#/" className={this.state.filterClass[0]}>All</a>
                    </li>
                    <li>
                        <a href="#/active" className={this.state.filterClass[1]}>Active</a>
                    </li>
                    <li>
                        <a href="#/completed" className={this.state.filterClass[2]}>Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" style={this.state.showClear} onClick={()=>this.clear()}>Clear completed</button>
            </footer>
        )
    }
}
export default Footer;