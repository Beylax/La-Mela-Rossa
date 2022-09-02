import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import background from "../Images/SfondoAcqua.jpg";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Theme: "white"
		};
	}

	ChangeTheme = () => {
		// let app = document.getElementsByClassName("App")[0];
		// let btn = document.getElementById("BTN_Theme");
		// if (this.state.Theme === "white") {
		// 	app.style.backgroundImage = `url(${background})`;
		// 	btn.style.backgroundColor = "var(--white-color)";
		// 	this.setState({
		// 		Theme: "green"
		// 	});
		// 	return;
		// }
		// this.setState({
		// 	Theme: "white"
		// });
		// app.style.backgroundImage = "none";
		// btn.style.backgroundColor = "var(--dark-green-color)";
	};

	ToggleNavbar = () => {
		let NavContainer = document.getElementById("NAV_CONTAINER");
		NavContainer.classList.toggle("nav-close");

		let btn = document.getElementById("BTN_NAVBAR");
		btn.classList.toggle("rotate");
		if (NavContainer.classList.contains("nav-close")) {
			btn.innerHTML = "&#8212;";
		} else {
			btn.innerHTML = "&#10005;";
		}
	};

	render() {
		return (
			<nav className="Navbar navbar navbar-expand-lg bg-red p-3">
				<div
					id="NAV_CONTAINER"
					className="container-fluid fs-5 row g-0 justify-content-evenly text-center"
				>
					<ul className="navbar-nav mb-lg-0 col-12 col-lg-8 align-items-center">
						<li className="nav-item mx-2">
							<Link
								to="/"
								className="nav-brand text-color-white fw-light"
							>
								<img
									width="70"
									src={require("../Images/Logo.png")}
									alt="La_Mela_Rossa"
									onClick={() => this.ToggleActive("home")}
								/>
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link
								to="/"
								className="nav-link text-color-white fw-light active"
								id="/"
								onClick={() => this.ToggleActive("home")}
							>
								HOME
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link
								to="/about"
								className="nav-link text-color-white fw-light"
								id="/about"
								onClick={() => this.ToggleActive("about")}
							>
								ABOUT
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link
								to="/contact"
								className="nav-link text-color-white fw-light"
								id="/contact"
								onClick={() => this.ToggleActive("contact")}
							>
								CONTATTI
							</Link>
						</li>
						{/* <li
							id="BTN_Theme"
							className="Theme nav-item mx-2"
							onClick={this.ChangeTheme}
						></li> */}
					</ul>
					<Link
						to="/login"
						className="Accedi col-5 col-lg-1 my-2 my-lg-0"
						onClick={() => this.ToggleActive(null)}
					>
						ACCEDI
					</Link>
				</div>
				<div
					id="BTN_NAVBAR"
					className="fw-bold text-color-white text-center m-auto"
					onClick={this.ToggleNavbar}
				>
					&#10005;
				</div>
			</nav>
		);
	}
}

export default Navbar;
