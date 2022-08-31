import React from "react";
import md5 from "md5";
import axios from "axios";
import Utils from "../Utils/Utils";
import "./LoginForm.css";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			Users: [],
			loaded: false,
			Error: ""
		};
	}

	
	Validate = () => {
		let users = this.state.Users;
		for (let i = 0; i < users.length; i++){
			if (users[i].Email === this.state.email && users[i].Pwd === md5(this.state.password)) {
				//Login effettuato con successo
				localStorage.setItem("logged", md5("loggato"));
				window.location.href = "/management"
				return;
			}
		}

		//Login non effettuato
		this.setState({
			Error: "Email o password errati"
		})
	}
	
	componentDidMount() {
		// axios.get(Utils.server + Utils.queries.Users).then(res => {
		// 	this.setState({
		// 		Users: res.data,
		// 		loaded: true
		// 	});
		// });
	}

	render() {
		if (this.state.loaded) {
			return (
				// Se i campi sono corretti allora mela verde
				// Se i campi NON sono corretti o sono vuoti allora mela rossa
				<form className="LoginForm text-center bg-white py-5">
					<div className="mb-3">
						<div className="fs-2 text-center">Email🍎</div>
						<input
							type="email"
							className="form-control text-center"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							onChange={() => {
								this.setState({
									email: document.getElementById("exampleInputEmail1").value
								});
							  }}
						/>
					</div>
					<div className="mb-3">
						<div className="fs-2 text-center">Password🍎</div>
						<input
							type="password"
							className="form-control text-center"
							id="exampleInputPassword1"
							onChange={() => {
								this.setState({
									password: document.getElementById("exampleInputPassword1").value
								});
							  }}
						/>
					</div>
					<button type="button" className="SignIn" onClick={this.Validate}>
						ACCEDI
					</button>
					<div className="text-color-red">
						{this.state.Error}
					</div>
				</form>
			);
		}
		else {
			//Simbolo di caricamento
			
		}
	}
}

export default LoginForm;
