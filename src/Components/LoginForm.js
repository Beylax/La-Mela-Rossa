import React from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			// Se i campi sono corretti allora mela verde
			// Se i campi NON sono corretti o sono vuoti allora mela rossa
			<form className="LoginForm text-center">
				<div className="mb-3">
					<div className="fs-2 text-center">Email🍎</div>
					<input
						type="email"
						className="form-control text-center"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<div className="fs-2 text-center">Password🍎</div>
					<input
						type="password"
						className="form-control text-center"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="submit" className="SignIn">
					ACCEDI
				</button>
				<div className="text-color-red">
					Email o password non corretti
				</div>
			</form>
		);
	}
}

export default LoginForm;
