import React from "react";
import axios from "axios";
import Utils from "../Utils/Utils";
import EducatorCard from "../Components/EducatorCard";
import "./About.css";

class About extends React.Component {
	Administrators = [];
	Educators = [];
	Helpers = [];

	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		axios.get(Utils.server + Utils.queries.Users).then(res => {
			let users = res.data;

			for (let i = 0; i < users.length; i++){
				users[i].ImgURL = "FotoProfilo" + users[i].Surname + ".png";
				if (users[i].Role === "0") this.Administrators.push(users[i]);
				if (users[i].Role === "1") this.Educators.push(users[i]);
				if (users[i].Role === "2") this.Helpers.push(users[i]);
			}

			this.setState({
				loaded: true
			});
		});
	}

	render() {
		if (this.state.loaded) {
			return (
				<div className="About py-4 text-center">
					<section>
						<h1>AMMINISTRATORI</h1>
						<div className="row g-0 justify-content-around">
							{this.Administrators.map(administrator => (
								<EducatorCard key={administrator.Username} educator={administrator} />
							))}
						</div>
					</section>
					<section>
						<h1>EDUCATORI</h1>
						<div className="row g-0 justify-content-around">
							{this.Educators.map(educator => (
								<EducatorCard key={educator.Username} educator={educator} />
							))}
						</div>
					</section>
					<section>
						<h1>AIUTANTI</h1>
						<div className="row g-0 justify-content-around">
							{this.Helpers.map(helper => (
								<EducatorCard key={helper.Username} educator={helper} />
							))}
						</div>
					</section>
				</div>
			);
		}
		else {
			<div className="About py-4 text-center">
				Caricamento in corso
			</div>
		}
	}
}

export default About;
