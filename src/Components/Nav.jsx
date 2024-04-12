const Nav = () => {
	return (
		<nav className="navbar">
			<ul>
				<li className="navbar__item">
					<button>All</button>
				</li>
				<li className="navbar__item">
					<button>Active</button>
				</li>
				<li className="navbar__item">
					<button>Completed</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
