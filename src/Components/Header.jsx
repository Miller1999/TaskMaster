import Light from "../assets/icon-sun.svg";
import Dark from "../assets/icon-moon.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="title">
				<h1>TODO</h1>
				<button>
					<img src={Light} alt="light" id="light" className="hidden" />
					<img src={Dark} alt="dark" id="dark" />
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
