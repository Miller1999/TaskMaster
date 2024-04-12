import { createContext, useState } from "react";
import "normalize.css";
import "./style.sass";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import ListTodos from "./Components/ListTodos";
import Nav from "./Components/Nav";
const ThemeContext = createContext();

function App() {
	const [theme, setTheme] = useState("light");
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<main className={`${theme}`}>
				<Header theme={theme} setTheme={setTheme} />
				<div className="container__todos">
					<ListTodos theme={theme}>
						<Todo />
						<Todo />
						<Todo />
						<div className={`listTodos__footer `}>
							<span>2 items left</span>
							<button>Clear Completed</button>
						</div>
					</ListTodos>
					<Nav />
				</div>

				<p>Drag and drop to reorder list</p>
			</main>
		</ThemeContext.Provider>
	);
}
export default App;
