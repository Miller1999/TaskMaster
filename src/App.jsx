import { Fragment } from "react";
import "normalize.css";
import "./style.sass";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import ListTodos from "./Components/ListTodos";

function App() {
	return (
		<Fragment>
			<Header />
			<ListTodos>
				<Todo />
				<Todo />
			</ListTodos>
		</Fragment>
	);
}

export default App;
