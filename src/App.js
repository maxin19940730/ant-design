import React from 'react';
import _ from 'lodash';
// import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Inbox from './component/Inbox';
import About from './component/About';
import Contact from './component/Contact';
import NoMatch from './component/NoMatch';

const routerData = {
  '/': { component: Inbox },
  '/about': { component: About },
  '/contact': { component: Contact },
  default: { component: NoMatch },
};
const arr = [];
_.forIn(routerData, (value, key) => {
  if (key !== 'default') {
    arr.push(<Route path={key} key={key} exact component={value.component} />);
  } else {
    arr.push(<Route component={value.component} />);
  }
});
const App = () => (
  <HashRouter>
    <Switch>
      {arr}
    </Switch>
  </HashRouter>
);

export default App;
