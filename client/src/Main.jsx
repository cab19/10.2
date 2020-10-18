import React from 'react';
import NavTop from './NavTop';
import { Switch, Route } from 'react-router-dom';

import Task from './Task';
import Worker from './Worker';

const Main = () => {
  return (
    <div>
        <NavTop />
        <Switch>
            <Route exact path='/task' component={Task}></Route>
            <Route exact path='/worker' component={Worker}></Route>
        </Switch>
    </div>
  );
}

export default Main;