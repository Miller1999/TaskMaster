import Close from "../assets/icon-cross.svg";

const Todo = ({ name, status, todos, completedTodo, deleteTodo }) => {
	return (
		<div className="todo">
			<div
				className={`todo__info ${status && "check"}`}
				onClick={() => {
					completedTodo(todos, name, status);
				}}
			>
				<button className="circle"></button>
				<p className="todo__text">{name}</p>
			</div>
			<button
				onClick={() => {
					deleteTodo(todos, name);
				}}
				className="todo__close"
			>
				<img src={Close} alt="Close" />
			</button>
		</div>
	);
};

export default Todo;
