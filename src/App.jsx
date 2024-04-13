import { createContext, useState } from "react";
import "normalize.css"; // Importa estilos para restablecer el diseño predeterminado del navegador
import "./style.sass"; // Importa estilos adicionales definidos en un archivo SASS
import Header from "./Components/Header"; // Importa el componente de encabezado
import Todo from "./Components/Todo"; // Importa el componente de elemento Todo
import ListTodos from "./Components/ListTodos"; // Importa el componente de lista de Todos
import Nav from "./Components/Nav"; // Importa el componente de navegación
import useLocalStorage from "./hook/useLocalStorage"; // Importa un hook personalizado para el almacenamiento local

// Crea un contexto para el tema de la aplicación
const ThemeContext = createContext();

// Componente principal de la aplicación
function App() {
	// Estado para el tema de la aplicación
	const [theme, setTheme] = useState("light");
	// Estado para la opción seleccionada en la navegación
	const [selected, setSelected] = useState("All");
	// Hook personalizado para manejar el almacenamiento local de la lista de todos
	const { item: todos, saveItem: setTodos } = useLocalStorage("todolist", []);
	// Estado para el elemento que se está arrastrando
	const [draggableItem, setDraggableItem] = useState(null);

	// Función para agregar un nuevo elemento a la lista de todos
	const addTodo = (newTodo) => {
		if (!preventDuplicate(todos, newTodo.name)) {
			setTodos([...todos, newTodo]);
		}
	};

	// Función para marcar como completado o incompleto un todo
	const completedTodo = (todos, name, status) => {
		const index = todos.findIndex((todo) => todo.name === name);
		todos[index].status = !status;
		setTodos([...todos]);
	};

	// Función para prevenir la adición de elementos duplicados en la lista de todos
	function preventDuplicate(actual, newItem) {
		if (actual.find((item) => item.name === newItem)) {
			return true;
		}
	}

	// Función para eliminar un todo de la lista
	const deleteTodo = (todos, name) => {
		const index = todos.findIndex((todo) => todo.name === name);
		todos.splice(index, 1);
		setTodos([...todos]);
	};

	// Función para eliminar todos los todos completados
	const deleteAllTodos = () => {
		const remainTodos = [...todos];
		const completedTodos = remainTodos.filter((todo) => todo.status);
		const uncompletedTodos = remainTodos.filter(
			(todo) => todo.status === false
		);
		completedTodos.splice(0, completedTodos.length);
		setTodos(uncompletedTodos);
	};

	// Función para manejar el inicio del arrastre de un elemento
	const handleDragStart = (index) => {
		setDraggableItem(todos[index]);
	};

	// Función para manejar el arrastre sobre un elemento
	const handleDragOver = (index) => {
		const newTodos = todos.filter((todo) => todo !== draggableItem); // Elimina el elemento arrastrado de su posición original
		newTodos.splice(index, 0, draggableItem); // Inserta el elemento arrastrado en su nueva posición
		setTodos(newTodos);
	};

	// Función para manejar el fin del arrastre de un elemento
	const handleDragEnd = () => {
		setDraggableItem(null);
	};

	// Renderizado del componente principal de la aplicación
	return (
		// Proveedor de contexto para el tema de la aplicación
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<main className={`${theme}`}>
				{/* Aplica el tema actual a la clase principal */}
				{/* Encabezado de la aplicación */}
				<Header theme={theme} setTheme={setTheme} addTodo={addTodo} />
				<div className="container__todos">
					{/* Lista de todos */}
					<ListTodos theme={theme}>
						{/* Renderiza los todos según la opción seleccionada */}
						{selected === "Active"
							? todos
									.filter((todo) => todo.status === false)
									.map((todo, index) => (
										<Todo
											key={todo.name}
											name={todo.name}
											status={todo.status}
											todos={todos}
											completedTodo={completedTodo}
											deleteTodo={deleteTodo}
											handleDragStart={handleDragStart}
											handleDragOver={handleDragOver}
											handleDragEnd={handleDragEnd}
											index={index}
										/>
									))
							: selected === "Completed"
							? todos
									.filter((todo) => todo.status)
									.map((todo, index) => (
										<Todo
											key={todo.name}
											name={todo.name}
											status={todo.status}
											todos={todos}
											completedTodo={completedTodo}
											deleteTodo={deleteTodo}
											handleDragStart={handleDragStart}
											handleDragOver={handleDragOver}
											handleDragEnd={handleDragEnd}
											index={index}
										/>
									))
							: todos.map((todo, index) => (
									<Todo
										key={todo.name}
										name={todo.name}
										status={todo.status}
										todos={todos}
										completedTodo={completedTodo}
										deleteTodo={deleteTodo}
										handleDragStart={handleDragStart}
										handleDragOver={handleDragOver}
										handleDragEnd={handleDragEnd}
										index={index}
									/>
							  ))}
						{/* Pie de página de la lista de todos */}
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
					{/* Navegación para filtrar los todos */}
					<Nav selected={selected} setSelected={setSelected} />
				</div>
				{/* Mensaje de instrucción para el arrastre y suelta */}
				<p>Drag and drop to reorder list</p>
			</main>
		</ThemeContext.Provider>
	);
}

export default App;
