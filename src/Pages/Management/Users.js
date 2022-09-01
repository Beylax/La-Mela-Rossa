import React from "react";
import "./Users.css";
import md5 from "md5";
import axios from "axios";
import Utils from "../../Utils/Utils";
import utils from "../../Utils/Utils";

class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Users: [],
			Roles: [],
			Users_loaded: false,
			Roles_loaded: false,
			New_User_Username: "",
			New_User_Email: "",
			New_User_Password: "",
			New_User_Soprannome: "",
			New_User_Nome: "",
			New_User_Cognome: "",
			New_User_Telefono: "",
			New_User_Descrizione: "",
			New_User_Ruolo: "",
		};
	}

	Users = [];
	Roles = [];

	componentDidMount() {
		axios.get(Utils.server + Utils.queries.Users).then((res) => {
			this.setState({
				Users: res.data,
				Users_loaded: true,
			});
		});

		axios.get(Utils.server + Utils.queries.Roles).then((res) => {
			this.setState({
				Roles: res.data,
				Roles_loaded: true,
			});
		});
	}

	render() {
		if (this.state.Roles_loaded && this.state.Users_loaded) {
			return (
				<div className="Users">
					<div id="New_User_Dialog" className="Dialog d-none p-3">
						<div className="Dialog-Header h4">
							Sicuro di voler creare un nuovo utente?
						</div>
						<hr></hr>
						<div className="Dialog-Body">
							<div>
								<label>Username: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Username}
								</label>
							</div>
							<div>
								<label>Email: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Email}
								</label>
							</div>
							<div>
								<label>Password: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Password}
								</label>
							</div>
							<div>
								<label>Soprannome: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Soprannome}
								</label>
							</div>
							<div>
								<label>Nome: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Nome}
								</label>
							</div>
							<div>
								<label>Cognome: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Cognome}
								</label>
							</div>
							<div>
								<label>Telefono: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Telefono}
								</label>
							</div>
							<div>
								<label>Descrizione: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Descrizione}
								</label>
							</div>
							<div>
								<label>Ruolo: </label>
								<label className="fst-italic mx-2">
									{this.state.New_User_Ruolo}
								</label>
							</div>
						</div>
						<hr></hr>
						<div className="Dialog-Footer d-flex justify-content-around">
							<button
								type="button"
								className="btn btn-success col-4"
								onClick={() => {
									axios.post(
											Utils.server + Utils.queries.Users,
											{
												Username: this.state.New_User_Username,
												Email: this.state.New_User_Email,
												Pwd: md5(this.state.New_User_Password),
												Surname: this.state.New_User_Soprannome,
												Firstname: this.state.New_User_Nome,
												Lastname: this.state.New_User_Cognome,
												Telephone: this.state.New_User_Telefono,
												Description: this.state.New_User_Descrizione,
												Role: this.state.New_User_Ruolo,
											},
										)
										.then(function (response) {
											console.log(response);
										})
										.catch(function (error) {
											console.log(error);
										});
									// window.location.reload();
								}}
							>
								SI
							</button>
							<button
								type="button"
								className="btn btn-danger col-4"
								onClick={() => {
									document
										.getElementById("New_User_Dialog")
										.classList.remove("openDialog");
								}}
							>
								NO
							</button>
						</div>
					</div>

					<section className="p-3">
						<form className="row g-3 justify-content-center">
							<div className="col-12 col-md-4">
								<div>Username*</div>
								<input
									id="user_username"
									type="text"
									required
									onChange={() => {
										this.setState({
											New_User_Username:
												document.getElementById(
													"user_username",
												).value,
										});
									}}
								/>
							</div>
							<div className="col-12 col-md-4">
								<div>Email*</div>
								<input
									id="user_email"
									type="text"
									required
									onChange={() => {
										this.setState({
											New_User_Email:
												document.getElementById(
													"user_email",
												).value,
										});
									}}
								/>
							</div>
							<div className="col-12 col-md-4">
								<div>Password*</div>
								<input
									id="user_password"
									type="text"
									required
									onChange={() => {
										this.setState({
											New_User_Password:
												document.getElementById(
													"user_password",
												).value,
										});
									}}
								/>
							</div>
							<div className="col-12 col-md-4">
								<div>Soprannome</div>
								<input
									id="user_soprannome"
									type="text"
									onChange={() => {
										this.setState({
											New_User_Soprannome:
												document.getElementById(
													"user_soprannome",
												).value,
										});
									}}
								/>
							</div>
							<div className="col-12 col-md-4">
								<div>Nome</div>
								<input
									id="user_nome"
									type="text"
									onChange={() => {
										this.setState({
											New_User_Nome:
												document.getElementById(
													"user_nome",
												).value,
										});
									}}
								/>
							</div>
							<div className="col-12 col-md-4">
								<div>Cognome</div>
								<input
									id="user_cognome"
									type="text"
									onChange={() => {
										this.setState({
											New_User_Cognome:
												document.getElementById(
													"user_cognome",
												).value,
										});
									}}
								/>
							</div>
							<div className="col-12 col-md-4">
								<div>Telefono</div>
								<input
									id="user_telefono"
									type="text"
									onChange={() => {
										this.setState({
											New_User_Telefono:
												document.getElementById(
													"user_telefono",
												).value,
										});
									}}
								/>
							</div>
							<div className="col-12 col-md-4">
								<div>Descrizione</div>
								<textarea
									id="user_descrizione"
									type="text"
									onChange={() => {
										this.setState({
											New_User_Descrizione:
												document.getElementById(
													"user_descrizione",
												).value,
										});
									}}
								/>
							</div>
							<div className="col-12 col-md-4">
								<div>Ruolo</div>
								<select
									id="user_ruolo"
									onChange={() => {
										this.setState({
											New_User_Ruolo:
												document.getElementById(
													"user_ruolo",
												).value,
										});
									}}
								>
									{this.state.Roles.map((role) => (
										<option
											key={role.Hierarchy}
											value={role.Hierarchy}
										>
											{role.Name}
										</option>
									))}
								</select>
							</div>
							<div className="col-12 col-md-4">
								<button
									type="button"
									className="d-block btn btn-green text-color-white fw-bold mx-auto"
									onClick={() => {
										document
											.getElementById("New_User_Dialog")
											.classList.toggle("openDialog");
									}}
								>
									Aggiungi utente
								</button>
							</div>
						</form>
					</section>
					<hr></hr>
				</div>
			);
		} else {
			<div className="Users">Caricamento in corso</div>;
		}
	}
}

export default Users;
