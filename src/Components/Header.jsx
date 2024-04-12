import Light from "../assets/icon-sun.svg";
import Dark from "../assets/icon-moon.svg";

const Header = ({ theme, setTheme }) => {
	const toggleTheme = () => {
		theme === "light"
			? setTheme("dark")
			: theme === "dark"
			? setTheme("light")
			: setTheme("dark");
	};
	return (
		<header className="header">
			<div className="title">
				<h1>TODO</h1>
				<button onClick={toggleTheme}>
					<img
						src={Light}
						alt="light"
						id="light"
						className={theme === "light" ? `hidden` : ""}
					/>
					<img
						src={Dark}
						alt="dark"
						id="dark"
						className={theme === "dark" ? `hidden` : ""}
					/>
				</button>
			</div>
			<div className="input">
				<div className="circle"></div>
				<input type="text" placeholder="Create a new Todo..." />
			</div>
		</header>
	);
};

export default Header;
