const Nav = ({ selected, setSelected }) => {
	const handleClick = (e) => {
		setSelected(e.target.textContent);
	};
	return (
		<nav className="navbar">
			<ul>
				<li className={`navbar__item ${selected === "All" ? "selected" : ""} `}>
					<button onClick={handleClick}>All</button>
				</li>
				<li
					className={`navbar__item ${selected === "Active" ? "selected" : ""} `}
				>
					<button onClick={handleClick}>Active</button>
				</li>
				<li
					className={`navbar__item ${
						selected === "Completed" ? "selected" : ""
					} `}
				>
					<button onClick={handleClick}>Completed</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
