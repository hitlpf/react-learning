import React from 'react'
import { Button } from 'antd';
import logo from '../static/timg.png'
import Title from "../title"
import '../style/index.less';

class Home extends React.Component {
    constructor(props){
        super(props); // 将props传递到父类的构造函数中。Class 组件应该始终使用 props 参数来调用父类的构造函数。
        this.state = { date: new Date(), isToggleOn: true} // 为state赋初值
        console.log(props);
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }
    // 挂载方法，当 Clock 组件第一次被渲染到 DOM 中的时执行
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState({ name: 'react-ssr home' });
    }
    // 卸载方法，当 DOM 中 Clock 组件被删除的时候执行
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {    
        this.setState({ date: new Date() });  
    }
    handleClick() {
        import(/* webpackChunkName: "async2" */ '../common/async2').then(module => {
            let Async2 = module.default;
            new Async2('import Async2');
        });
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }

    render(){
        return (
            <div>
                <Title name={this.state.name} theme={this.props.theme}/>
                <h2>It is {this.state.date.toString()}</h2>
                <img src={ logo } className="logo"/>
                {/* <Button type="primary" onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</Button> */}
                <Button id='button1' type="primary" onClick={this.handleClick.bind(this)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</Button>
            </div>
        );
    }

}

export default Home;