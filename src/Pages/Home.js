import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
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

	render() {
		return (
			<div className="Home">
				<section>
					<div className="row align-items-center justify-content-center w-75 mx-auto">
						<div className="col-12 col-md-6">
							<div className="h1 md-text-center fw-bold text-color-red text-shadow-white">
								Entra nella famiglia della<br></br>MELA ROSSA
							</div>
							<div className="h5 md-text-center text-color-white text-shadow-red">
								Centri estivi - Doposcuola - Giochi - Uscite -
								Sport
							</div>
							<div className="row my-4">
								<Link
									to="/contact"
									className="btnContatti btn btn-green text-color-white fw-bold col-11 col-lg-4 py-3 d-flex align-items-center justify-content-center"
									onClick={() => this.ToggleActive("contact")}
								>
									CONTATTATECI
								</Link>
								<div className="col-2 my-1"></div>
								<div className="btnIscrizione btn bg-white text-color-green fw-bold col-11 col-lg-4 py-3 d-flex align-items-center justify-content-center">
									Iscriviti ora
								</div>
							</div>
						</div>
						<div className="col-md-6 d-flex align-items-center justify-content-center position-relative">
							<img
								className="LogoTitle"
								src={require("../Images/Logo.png")}
								alt="La mela rossa"
							/>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
