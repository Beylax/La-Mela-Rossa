import { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import "./Content.css";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Management from "../Pages/Management";
import Error from "../Pages/Error";
import RoutePrivate from "./RoutePrivate"
import Forbidden from "../Pages/Forbidden";
import Users from "../Pages/Management/Users";
import Centers from "../Pages/Management/Centers";
import Events from "../Pages/Management/Events";
import Lists from "../Pages/Management/Lists";

function Content() {
    const className = " Content ";
	const location = useLocation();

	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage("fadeOut");

		//Changes the active link in the navbar
		let links = document.getElementsByClassName("nav-link");
		for (let i = 0; i < links.length; i++) {
			links[i].classList.remove("active");
		}
		if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact" || location.pathname === "/management/users" || location.pathname === "/management/centers" || location.pathname === "/management/events" || location.pathname === "/management/lists") {
			document.getElementById(location.pathname.replace("/management/", "")).classList.add("active");
		}

		//Enable/Disable Navbar if we are in Management mode
		if (location.pathname.includes("/management")) {
			document.getElementsByClassName("Navbar")[0].style.display = "none";
			document.getElementsByClassName("Footer")[0].style.display = "none";
			document.getElementsByClassName("App")[0].style.flexDirection = "row";
			if (document.getElementsByClassName("Sidednavbar")[0] !== undefined) {
				document.getElementsByClassName("Sidednavbar")[0].style.display = "block";
			}
		}
		else {
			document.getElementsByClassName("Navbar")[0].style.display = "block";
			document.getElementsByClassName("Footer")[0].style.display = "flex";
			document.getElementsByClassName("App")[0].style.flexDirection = "column";
			if (document.getElementsByClassName("Sidednavbar")[0] !== undefined) {
				document.getElementsByClassName("Sidednavbar")[0].style.display = "none";
			}		
		}
	}, [location, displayLocation]);

	return (
		<div
			className={`${transitionStage}` + className}
			onAnimationEnd={() => {
				if (transitionStage === "fadeOut") {
					setTransistionStage("fadeIn");
					setDisplayLocation(location);
				}
			}}
		>
			<Routes location={displayLocation}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route element={<RoutePrivate />}>
					<Route path="/management" element={<Management />}>
						<Route path="/management/users" element={<Users/> }/>
						<Route path="/management/centers" element={<Centers/> }/>
						<Route path="/management/events" element={<Events/> }/>
						<Route path="/management/lists" element={<Lists/> }/>
					</Route>
				</Route>
				<Route path="/forbidden" element={<Forbidden />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default Content;
