import { createContext, useState } from "react";
import "normalize.css";
import "./style.sass";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import ListTodos from "./Components/ListTodos";
import Nav from "./Components/Nav";
import useLocalStorage from "./hook/useLocalStorage";
const ThemeContext = createContext();

function App() {
	const [theme, setTheme] = useState("light");
	const [selected, setSelected] = useState("All");
	const { item: todos, saveItem: setTodos } = useLocalStorage("todolist", []);

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};
	const completedTodo = (todos, name, status) => {
		const index = todos.findIndex((todo) => todo.name === name);
		todos[index].status = !status;
		setTodos([...todos]);
	};
	const deleteTodo = (todos, name) => {
		const index = todos.findIndex((todo) => todo.name === name);
		todos.splice(index, 1);
		setTodos([...todos]);
	};
	const deleteAllTodos = () => {
		const remainTodos = [...todos];
		const completedTodos = remainTodos.filter((todo) => todo.status);
		const uncompletedTodos = remainTodos.filter(
			(todo) => todo.status === false
		);
		completedTodos.splice(0, completedTodos.length);
		setTodos(uncompletedTodos);
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<main className={`${theme}`}>
				<Header theme={theme} setTheme={setTheme} addTodo={addTodo} />
				<div className="container__todos">
					<ListTodos theme={theme}>
						{selected === "Active"
							? todos
									.filter((todo) => todo.status === false)
									.map((todo) => (
										<Todo
											key={todo.name}
											name={todo.name}
											status={todo.status}
											todos={todos}
											completedTodo={completedTodo}
											deleteTodo={deleteTodo}
										/>
									))
							: selected === "Completed"
							? todos
									.filter((todo) => todo.status)
									.map((todo) => (
										<Todo
											key={todo.name}
											name={todo.name}
											status={todo.status}
											todos={todos}
											completedTodo={completedTodo}
											deleteTodo={deleteTodo}
										/>
									))
							: todos.map((todo) => (
									<Todo
										key={todo.name}
										name={todo.name}
										status={todo.status}
										todos={todos}
										completedTodo={completedTodo}
										deleteTodo={deleteTodo}
									/>
							  ))}
						<div className={`listTodos__footer `}>
							<span>
								{todos.filter((todo) => todo.status === false).length} items
								left
							</span>
							<button onClick={() => deleteAllTodos(todos)}>
								Clear Completed
							</button>
						</div>
					</ListTodos>
					<Nav selected={selected} setSelected={setSelected} />
				</div>

				<p>Drag and drop to reorder list</p>
			</main>
		</ThemeContext.Provider>
	);
}
export default App;
