import React from "react";
import EducatorCard from "../Components/EducatorCard";
import "./About.css";

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="About">
				<section>
					<div className="row g-0">
						<EducatorCard
							educator={{
								Surname: "Cacio",
								FirstName: "Giacomo",
								LastName: "Caciotta",
								ImgURL: 'VoltoGiacomo',
								Description: "Ciao! Sono Giacomo Caciotta, per gli amici Cacio. Sono laureato in Scienze della formazione primaria e ambisco alla cattedra universitaria",
								Telephone: "393 485 2348",
								Email: "giacomo.caciotta@gmail.com"
							}}
						/>
						<div className="col-2"></div>
						<EducatorCard
							educator={{
								Surname: "Eri",
								FirstName: "Erica",
								LastName: "Santini",
								ImgURL: 'VoltoErica',
								Description: "Ciao! Sono Giacomo Caciotta, per gli amici Cacio. Sono laureato in Scienze della formazione primaria e ambisco alla cattedra universitaria",
								Telephone: "393 485 2348",
								Email: "erica.santini@gmail.com"
							}}
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default About;
