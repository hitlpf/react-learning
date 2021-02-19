import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Home from './Home'
import Product from './Product'
import Schedule from './Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={()=>(<Product products={PRODUCTS}/>)}/>
      {/* <Route exact path='/' component={()=>(<Home products={PRODUCTS}/>)}/> */}
      {/* <Route path='/roster' component={Roster}/> */}
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

export default Main;