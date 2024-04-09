import Close from "../assets/icon-cross.svg";

const Todo = () => {
	return (
		<div className="todo">
			<div
				className="todo__info check"
				onClick={(e) => {
					console.log(e.target.parentNode.classList);
					e.target.parentNode.classList.toggle("check");
				}}
			>
				<button
					className="circle"
					onClick={(e) => {
						console.log(e.target.parentNode.classList);
						e.target.parentNode.classList.toggle("check");
					}}
				></button>
				<p className="todo__text">Tarea</p>
			</div>
			<img src={Close} alt="Close" />
		</div>
	);
};

export default Todo;
