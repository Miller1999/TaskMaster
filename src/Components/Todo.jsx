import Close from "../assets/icon-cross.svg";

const Todo = () => {
	return (
		<div className="todo">
			<div
				className="todo__info"
				onClick={(e) => {
					e.target.parentElement.classList.toggle("check");
				}}
			>
				<button className="circle"></button>
				<p className="todo__text">Tarea</p>
			</div>
			<img src={Close} alt="Close" />
		</div>
	);
};

export default Todo;
