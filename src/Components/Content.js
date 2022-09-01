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

function Content() {
    const className = " Content ";
	const location = useLocation();

	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage("fadeOut");
		let links = document.getElementsByClassName("nav-link");
		for (let i = 0; i < links.length; i++) {
			links[i].classList.remove("active");
		}
		if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact") {
			document.getElementById(location.pathname).classList.add("active");
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
					<Route path="/management" element={<Management />} />					
				</Route>
				<Route path="/forbidden" element={<Forbidden />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default Content;
