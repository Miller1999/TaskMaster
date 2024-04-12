import { Fragment } from "react";
import "normalize.css";
import "./style.sass";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import ListTodos from "./Components/ListTodos";
import Nav from "./Components/Nav";

function App() {
	return (
		<Fragment>
			<Header />
			<ListTodos>
				<Todo />
				<Todo />
				<Todo />
				<div className="listTodos__footer">
					<span>2 items left</span>
					<button>Clear Completed</button>
				</div>
			</ListTodos>
			<Nav />
			<p>Drag and drop to reorder list</p>
		</Fragment>
	);
}

export default App;
