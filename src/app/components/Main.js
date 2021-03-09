import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Product from './Product';
import {Hoc1,Hoc2} from './HOCTest';
import Schedule from './Schedule';
// const Product = lazy(()=>{import('./Product')});
// const Schedule = lazy(()=>{import('./Schedule')});

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const ThemeContext = React.createContext('light');

// const Main = () => (
//   <main>
//     <ThemeContext.Provider value="dark">
//       <Switch>
//         <Route exact path='/' component={()=>(<Home theme={this.context}/>)}/>
//         <Route exact path='/product' component={()=>(<Product products={PRODUCTS}/>)}/>
//         <Route path='/schedule' component={Schedule}/>
//       </Switch>
//     </ThemeContext.Provider>
//   </main>
// );
class Main extends React.Component {
  static contextType = ThemeContext;
  render(){
    return (
      <main>
      {/* <ThemeContext.Provider value="dark"> */}
        <Switch>
          <Route exact path='/' component={()=>(<Home theme={this.context}/>)}/>
          <Route exact path='/product' component={()=>(<Product products={PRODUCTS}/>)}/>
          <Route exact path='/hoc' component={()=>(<Hoc2/>)}/>
          {/* <Route path='/hoc' component={Schedule}/> */}
          <Route path='/schedule' component={Schedule}/>
        </Switch>
      {/* </ThemeContext.Provider> */}
    </main>
    );
  };
}

export default Main;