import React, { Component } from 'react';
import List from './list/list.js';
import ErrorPage from './'
import Error404 from './404.js'

import './App.css';
import { ReactRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom'



// test render- please disregard this 
const Info = () => {
  return (
    <div>
      <h1>A little bit about celine Radios Mission </h1>
      <p>pretium pellentesque. Donec sed eros vel eros pellentesque viverra. Aenean fringilla eget libero et porta. Suspendisse sit amet convallis neque, sit amet cursus mi. Donec vel nulla ex. Mauris imperdiet varius mi, sed lacinia lacus laoreet vitae. Phasellus vel tempor tortor. Nunc lobortis mauris at ligula congue, ac accumsan felis pellentesque. Integer commodo odio ex, a auctor libero ornare sit amet.

Curabitur eu sodales dolor. Proin tempus cursus ipsum quis facilisis. Duis dapibus egestas diam nec mattis. Sed blandit nisl nisi. Fusce mattis non quam sed faucibus. Cras nec nulla commodo tellus mollis porta in in diam. Aenean nec mollis neque. Sed rutrum turpis eu elit iaculis tempor. Nam vel semper ante.

Suspendisse potenti. Vestibulum elementum nisi ac velit pulvinar lobortis. In hac habitasse platea dictumst. Sed nec nunc risus. Donec ut erat ut mi consequat eleifend at vel sem. Duis imperdiet magna ut eros ornare ornare ac eget turpis. Etiam mattis erat mauris, sit amet blandit ante laoreet ut. Quisque euismod diam tristique viverra convallis. In fermentum tellus porta, imperdiet justo vitae, faucibus ex. Mauris sed tempor nibh. Praesent molestie ac ex quis rhoncus. Maecenas in enim lacus. Sed vitae mauris orci.

Nunc risus dolor, fermentum vel dui ut, molestie imperdiet tortor. Morbi interdum lacus eu turpis sodales auctor. Suspendisse viverra finibus turpis sed auctor. Aliquam vehicula mi fermentum risus pellentesque, eget mattis purus dictum. Proin risus elit, vehicula et commodo non, auctor in metus. Nullam laoreet urna ipsum, nec auctor diam porta at. Donec dapibus elementum nisl et sodales. Nunc nec ullamcorper orci, eu accumsan dolor. Suspendisse potenti. Sed vitae risus eu justo luctus egestas id sed dui. Donec nec tortor faucibus nunc suscipit sollicitudin a a elit. In vitae libero aliquet massa convallis finibus vestibulum in velit. Sed sodales sollicitudin diam.

</p>
    </div>
  )
};


class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
  
          <Route exact path="/" component={List} />
          <Route path="/info" component={Info} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
