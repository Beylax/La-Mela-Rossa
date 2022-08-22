import React from "react";
import "./Footer.css";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="Footer d-flex align-items-center justify-content-center bg-red text-color-white text-center py-4">
				Copyright @ 2022 - La Mela Rossa ASP by Manuel Baldoni
			</div>
		);
	}
}

export default Footer;
