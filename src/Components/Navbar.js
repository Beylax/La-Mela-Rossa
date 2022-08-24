import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import background from "../Images/SfondoAcqua.jpg";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	ToggleActive = (linkID) => {
		let links = document.getElementsByClassName("nav-link");
		for (let i = 0; i < links.length; i++) {
			links[i].classList.remove("active");
		}
		if (linkID !== null) {
			document.getElementById(linkID).classList.add("active");
		}
	};

	ChangeTheme = () => {
		let app = document.getElementsByClassName("App")[0];
		let btn = document.getElementById("BTN_Theme");
		if (app.style.backgroundImage === "none") {
			app.style.backgroundImage = `url(${background})`;
			btn.style.backgroundColor = "var(--white-color)";
			return;
		}
		
		app.style.backgroundImage = "none";
		btn.style.backgroundColor = "var(--dark-green-color)";
	}

	render() {
		return (
			<nav className="Navbar navbar navbar-expand-lg bg-red p-3">
				<div className="container-fluid fs-5">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse text-center row g-0 justify-content-center"
						id="navbarTogglerDemo02"
					>
						<ul className="navbar-nav align-items-center col-12 col-lg-8">
							<li className="nav-item mx-2">
								<Link
									to="/"
									className="nav-brand text-color-white fw-light"
								>
									<img
										width="70"
										src={require("../Images/Logo.png")}
										alt="La_Mela_Rossa"
										onClick={() =>
											this.ToggleActive("home")
										}
									/>
								</Link>
							</li>
							<li className="nav-item mx-2">
								<Link
									to="/"
									className="nav-link text-color-white fw-light active"
									id="home"
									onClick={() => this.ToggleActive("home")}
								>
									HOME
								</Link>
							</li>
							<li className="nav-item mx-2">
								<Link
									to="/about"
									className="nav-link text-color-white fw-light"
									id="about"
									onClick={() => this.ToggleActive("about")}
								>
									ABOUT
								</Link>
							</li>
							<li className="nav-item mx-2">
								<Link
									to="/contact"
									className="nav-link text-color-white fw-light"
									id="contact"
									onClick={() => this.ToggleActive("contact")}
								>
									CONTATTI
								</Link>
							</li>
							<li id="BTN_Theme" className="Theme nav-item mx-2" onClick={this.ChangeTheme}></li>
						</ul>
						<Link
							to="/login"
							className="Accedi col-6 col-lg-2"
							onClick={() => this.ToggleActive(null)}
						>
							ACCEDI
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
