import React  from 'react';

function HOC(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
          super(props)
          this.state = { //定义可复用的状态
              count:1
          }
          this.getCode = this.getCode.bind(this) 
        }
      
        componentDidMount() {
            console.log('111')
        }
      
      　//定义可复用的方法
        getCode(mobile) {
          // ...
          this.setState({count : mobile})
          console.log(mobile)
        }
        postVcode(mobile) {
          // ...
        }
        render() {
          return (
            <div class="hoc">
              <WrappedComponent getCode={this.getCode} state={this.state} {...this.props}/>
            </div>
          )
        }
    };
}

class HOCTest1 extends React.Component{
    render() {
        return (
          <div class='hoc1'>
            <button onClick={()=>{this.props.getCode('hoc1')}}>使用高阶组件里复用的方法1</button>
            {this.props.state.count}
          </div>
        )
    }
}
class HOCTest2 extends React.Component{
    render() {
        return (
          <div class='hoc2'>
            <button onClick={()=>{this.props.getCode('hoc2')}}>使用高阶组件里复用的方法2</button>
            {this.props.state.count}
          </div>
        )
    }
}
export let Hoc1 = HOC(HOCTest1);
export let Hoc2 = HOC(HOCTest2);
// export { Hoc1, Hoc2};