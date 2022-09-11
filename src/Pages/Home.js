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
			<div className="Home p-4">
				<section className="landing-home">
					<div className="row align-items-center justify-content-center w-75 mx-auto">
						<div className="col-12 col-md-6 p-0">
							<div className="h1 fw-bold fst-italic text-shadow-white">
								Entra nella famiglia della
							</div>
							<div className="h1 fw-bold text-color-red text-shadow-white">
								MELA ROSSA
							</div>
							<div className="h5 text-color-red mb-5">
								Centri estivi - Doposcuola - Giochi - Uscite -
								Sport
							</div>
							<div className="row g-0 my-4">
								<Link
									to="/contact"
									className="btnContatti btn btn-green text-color-white py-3 fw-bold col-6 col-lg-4 d-flex align-items-center justify-content-center"
									onClick={() => this.ToggleActive("contact")}
								>
									CONTATTATECI
								</Link>
								<div className="col-12 col-lg-2 my-1"></div>
								<div className="btnIscrizione btn bg-white text-color-green py-3 fw-bold col-6 col-lg-4 d-flex align-items-center justify-content-center">
									ISCRIVITI ORA
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
				<section className="dashboard-home">
					
				</section>
			</div>
		);
	}
}

export default Home;
