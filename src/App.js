import React from "react";
// import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import Inbox from "./component/Inbox";
import About from "./component/About";
import Contact from "./component/Contact";
import NoMatch from "./component/NoMatch";

const routerData = {
	"/": { component: Inbox },
	"/about": { component: About },
	"/contact": { component: Contact },
	default: { component: NoMatch },
};
const arr = [];
for (const key in routerData) {
	if (key !== "default") {
		arr.push(<Route path={key} key={key} exact component={routerData[key].component} />);
	} else {
		arr.push(<Route component={routerData[key].component} />);
	}
}
const App = () => (
	<HashRouter>
		<Switch>
			{arr}
  		</Switch>
  	</HashRouter>
);

export default App;
