import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

const App = () => (
    <Router>
      {/* <Suspense fallback={<div>loading</div>}> */}
        <div>
          <Header />
          <Main />
        </div>
      {/* </Suspense> */}
    </Router>
)

export default App;