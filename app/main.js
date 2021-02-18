// import React from 'react';
// import { render } from 'react-dom';
// import { Button } from 'antd';

// // 引入React-Router模块
// import { BrowserRouter as Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// // 引入Antd的导航组件
// import { Menu, Icon, Switch } from 'antd'
// const SubMenu = Menu.SubMenu

// // 引入Ant-Design样式 & Animate.CSS样式
// // import 'animate.css/animate.min.css'
// // import 'font-awesome/css/font-awesome.min.css'

// import './style/index.less';
// import './style/main.css';
// import logo from './static/timg.png'
// import Title from "./title"

// // import myForm from './components/form.js'

// function App() {
//     return <div>
//         <Title name="react app！"/>
//         <img src={ logo } className="logo"/>
//         <Button type="primary">Button</Button>
//     </div>
// }

// render(<App/>, document.getElementById('app'));



import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));