import React from "react";
import { Outlet } from "react-router-dom";
import "./Management.css";

class Management extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="Management">
				<Outlet/>
			</div>
		);
	}
}

export default Management;
