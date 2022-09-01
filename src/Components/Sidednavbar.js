import React from "react";
import { Link } from "react-router-dom";
import "./Sidednavbar.css";

class Sidednavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
    }

    ToggleSidednavbar = () => {
		let snav = document.getElementsByClassName("Sidednavbar")[0];
		snav.classList.toggle("sidednavbar-min");

		let btn = document.getElementById("BTN_Toggle_Sidednavbar");
		btn.classList.toggle("srotate");
		if (snav.classList.contains("sidednavbar-min")) {
            btn.innerHTML = "&#8594;";
            document.getElementById("users").innerHTML = "";
            document.getElementById("centers").innerHTML = "";
            document.getElementById("events").innerHTML = "";
            document.getElementById("lists").innerHTML = "";
		} else {
            btn.innerHTML = "&#8592;";
            document.getElementById("users").innerHTML = "UTENTI";
            document.getElementById("centers").innerHTML = "CENTRI ESTIVI";
            document.getElementById("events").innerHTML = "EVENTI";
            document.getElementById("lists").innerHTML = "LISTE BAMBINI";
		}
	};
    
	render() {
		return (
            <div className="Sidednavbar text-color-white position-relative">
                <div id="BTN_Toggle_Sidednavbar" className="fs-1 text-color-white ms-auto px-3" onClick={this.ToggleSidednavbar}>
                    &#8592;
                </div>
				<ul className="sidednavbar-nav p-0 d-flex flex-column justify-content-between">
					<li className="nav-item">
						<Link
							to="/management"
							className="d-flex align-items-center justify-content-center position-relative"
						>
                            <img
                                className="IMG_Logo"
								src={require("../Images/Logo.png")}
								alt="La_Mela_Rossa"
							/>
						</Link>
					</li>
					<li className="nav-item">
                        <Link to="/management/users" id="users" className="nav-link">
                            UTENTI
                        </Link>
					</li>
					<li className="nav-item">
                        <Link to="/management/centers" id="centers" className="nav-link">
                            CENTRI ESTIVI
                        </Link>
					</li>
					<li className="nav-item">
                        <Link to="/management/events" id="events" className="nav-link">
                            EVENTI
                        </Link>
					</li>
					<li className="nav-item">
                        <Link to="/management/lists" id="lists" className="nav-link">
                            LISTE BAMBINI
                        </Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Sidednavbar;
