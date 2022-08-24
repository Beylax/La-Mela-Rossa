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
								Description: "Ciao! Sono Erica Santini, per gli amici Eri. Sono laureata in Scienze della formazione primaria e lavoro presso uno scuola elementare come insegnante di sostegno",
								Telephone: "393 485 2348",
								Email: "erica.santini@gmail.com"
							}}
						/>
						<EducatorCard
							educator={{
								Surname: "Vero",
								FirstName: "Veronica",
								LastName: "Babbini",
								ImgURL: 'VoltoVeronica',
								Description: "Ciao! Sono Veronica Babbini, per gli amici Vero. Ambisco a laurearmi in Scienze della formazione primaria e adoro giocare con i bambini",
								Telephone: "393 485 2348",
								Email: "veronicababbini@gmail.com"
							}}
						/>
						<div className="col-2"></div>
						<EducatorCard
							educator={{
								Surname: "Sofi",
								FirstName: "Sofia",
								LastName: "Mantani",
								ImgURL: 'VoltoSofiaMantani',
								Description: "Ciao! Sono Sofia Mantani, per gli amici Sofi. Sono laureata in scienze della formazione primaria",
								Telephone: "393 485 2348",
								Email: "sofia.mantani@gmail.com"
							}}
						/>
						<EducatorCard
							educator={{
								Surname: "Gioia",
								FirstName: "Gaia",
								LastName: "Zanotti",
								ImgURL: 'VoltoGaia',
								Description: "Ciao! Sono Gaia Zanotti, per gli amici Gioia. Frequento il quinto anno di scuola superiore e adoro giocare con i bambini",
								Telephone: "393 485 2348",
								Email: "gaia.zanotti@gmail.com"
							}}
						/>
						<div className="col-2"></div>
					</div>
				</section>
			</div>
		);
	}
}

export default About;
