import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AnimatedPage from "../Components/AnimatedPage";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="Home">
				<section>
					<div className="row align-items-center w-75 mx-auto">
						<div className="col-12 col-md-6">
							<div className="h1">
								Entra a far parte della famiglia della Mela
								Rossa
							</div>
							<div className="h3 text-color-red">
								Centri estivi - Doposcuola - Giochi - Uscite
							</div>
							<div className="row mt-5">
								<Link
									to="/contact"
									className="btn btn-green text-color-white col-12 col-md-4 py-3 d-flex align-items-center justify-content-center"
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