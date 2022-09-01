import React from "react";
import "./EducatorCard.css";

class EducatorCard extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            
        };
	}
	render() {
		return (
			<div className="EducatorCard ed-card col-12 col-md-5 position-relative p-3">
				<div className="ed-img-container">
					<img className="ed-img" src={require(`../Images/${this.props.educator.ImgURL}`)} alt={this.props.educator.Surname}/>
				</div>
				<div className="ed-card-header">
					<div className="ed-card-title text-uppercase text-white">{this.props.educator.Surname}</div>
				</div>
				<hr></hr>
				<div className="ed-card-body">
					<div className="ed-card-subtitle">Nome</div>
					<div className="ed-card-text">{this.props.educator.Firstname}</div>
					<div className="ed-card-subtitle">Cognome</div>
					<div className="ed-card-text">{this.props.educator.Lastname}</div>
					<div className="ed-card-subtitle">Email</div>
					<div className="ed-card-text">{this.props.educator.Email}</div>
					<div className="ed-card-subtitle">Telefono</div>
					<div className="ed-card-text">{this.props.educator.Telephone}</div>
					<div className="ed-card-description text-color-white text-center fst-italic fw-bold mt-2 w-50 mx-auto">{this.props.educator.Description}</div>
				</div>
			</div>
		);
	}
}

export default EducatorCard;
