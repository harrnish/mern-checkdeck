import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar.component";
import TaskList from "./components/task-list.component";
import EditTask from "./components/edit-task.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";

function App() {
	return (
		<Router>
			<Navbar />

			<div className="container">
				<br />
				<br />
				<Route path="/" exact component={TaskList} />
				<Route path="/edit/:id" component={EditTask} />
				<Route path="/create" component={CreateTask} />
				<Route path="/user" component={CreateUser} />
			</div>
		</Router>
	);
}

export default App;
