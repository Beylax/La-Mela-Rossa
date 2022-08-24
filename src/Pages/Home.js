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
					<div className="row align-items-center w-75 mx-auto">
						<div className="col-12 col-md-6">
							<div className="h1 md-text-center fw-bold">
								Entra nella famiglia della<br></br>MELA ROSSA
							</div>
							<div className="h5 md-text-center text-color-red">
								Centri estivi - Doposcuola - Giochi - Uscite -
								Sport
							</div>
							<div className="row mt-5">
								<Link
									to="/contact"
									className="btn btn-green text-color-white fw-bold col-12 col-md-4 py-3 d-flex align-items-center justify-content-center"
									onClick={() => this.ToggleActive("contact")}
								>
									CONTATTATECI
								</Link>
								<div className="col-2"></div>
								<div className="btnIscrizione col-12 col-md-4 my-3 d-flex align-items-center justify-content-center text-color-red h5 lh-lg">
									Iscriviti ora
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
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
