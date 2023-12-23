import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./NavBar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<NavBar />
		<Jumbotron />
		<Cards />
		<Footer />
	);
};

export default Home;
