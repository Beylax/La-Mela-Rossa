import React from "react";
import md5 from "md5";
import axios from "axios";
import Utils from "../Utils/Utils";
import {withRouter} from 'react-router-dom';
import "./LoginForm.css";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			Users: [],
			loaded: false,
		};
	}

	EmailChange = () => {
		this.setState({
			email: document.getElementById("exampleInputEmail1").value
		});
	}
	PasswordChange = () => {
		this.setState({
			password: document.getElementById("exampleInputPassword1").value
		});
	}

	Validate = () => {
		let res = this.state.Users.indexOf({ Email: this.state.email, Pwd: md5(this.state.password) });
		console.log(res);
	}
	
	componentDidMount() {
		console.log(Utils.server + Utils.queries.Users)
		axios.get(Utils.server + Utils.queries.Users).then(res => {
			this.setState({
				Users: res.data,
				loaded: true
			});
		});
	}

	render() {
		if (this.state.loaded) {
			return (
				// Se i campi sono corretti allora mela verde
				// Se i campi NON sono corretti o sono vuoti allora mela rossa
				<form className="LoginForm text-center bg-white py-5" onSubmit={this.Validate()}>
					<div className="mb-3">
						<div className="fs-2 text-center">Email🍎</div>
						<input
							type="email"
							className="form-control text-center"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							value={this.state.email}
							  onChange={this.EmailChange}
						/>
					</div>
					<div className="mb-3">
						<div className="fs-2 text-center">Password🍎</div>
						<input
							type="password"
							className="form-control text-center"
							id="exampleInputPassword1"
							value={this.state.password}
							  onChange={this.PasswordChange}
						/>
					</div>
					<button type="submit" className="SignIn">
						ACCEDI
					</button>
					<div id="Error_Message" className="text-color-red d-none">
						Email o password non corretti
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
