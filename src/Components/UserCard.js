import React from "react";
import "./UserCard.css";

class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="UserCard user-card col-12 col-md-5 position-relative p-3">
				<div className="BTN_Delete_User fw-bold text-color-red text-center">
					&#10005;
				</div>
				<div className="row g-0 align-items-center justify-content-around">
					<div className="user-img-container col-12 col-md-4">
						<img
							className="user-img"
							src={require(`../Images/${this.props.educator.ImgURL}`)}
							alt={this.props.educator.Surname}
						/>
					</div>
					<div className="user-card-body text-start col-12 col-md-8">
						<div className="user-card-subtitle">Username</div>
						<input
							type="text"
							className="user-card-text"
							placeholder={this.props.educator.Username}
						/>
						<div className="user-card-subtitle">
							Password "non visibile"
						</div>
						<input
							type="text"
							className="user-card-text"
							placeholder={this.props.educator.Pwd}
						/>
						<div className="user-card-subtitle">Soprannome</div>
						<input
							type="text"
							className="user-card-text"
							placeholder={this.props.educator.Surname}
						/>
						<div className="user-card-subtitle">Nome</div>
						<input
							type="text"
							className="user-card-text"
							placeholder={this.props.educator.Firstname}
						/>
						<div className="user-card-subtitle">Cognome</div>
						<input
							type="text"
							className="user-card-text"
							placeholder={this.props.educator.Lastname}
						/>
						<div className="user-card-subtitle">Email</div>
						<input
							type="text"
							className="user-card-text"
							placeholder={this.props.educator.Email}
						/>
						<div className="user-card-subtitle">Telefono</div>
						<input
							type="text"
							className="user-card-text"
							placeholder={this.props.educator.Telephone}
						/>
						<div className="user-card-subtitle">Descrizione</div>
						<input
							type="text"
							className="user-card-description fst-italic fw-bold mt-2"
							placeholder={this.props.educator.Description}
						/>
						<div className="user-card-subtitle">Ruolo</div>
						<select
							// id="user_ruolo"
							// onChange={() => {
							// 	this.setState({
							// 		New_User_Ruolo:
							// 			document.getElementById(
							// 				"user_ruolo",
							// 			).value,
							// 	});
							// }}
							value={this.props.educator.Role}
						>
							{this.props.roles.map((role) => (
								<option
									key={role.Hierarchy}
									value={role.Hierarchy}
								>
									{role.Name}
								</option>
							))}
						</select>
						<button
							type="button"
							className="d-block btn btn-green text-color-white fw-bold mx-auto my-4"
							onClick={() => {
								
							}}
						>
							Salva
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default UserCard;
