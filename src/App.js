import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import Sidednavbar from "./Components/Sidednavbar";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Sidednavbar/>
				<Content />
				<Footer />
			</div>
		);
	}
}

export default App;
