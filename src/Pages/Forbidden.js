import React from "react";
import "./Forbidden.css";

class Forbidden extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className="Forbidden">Non hai accesso a quest'area</div>;
	}
}

export default Forbidden;
