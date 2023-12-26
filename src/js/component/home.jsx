import React from "react";

import { NavBar } from "./NavBar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

const Home = () => {
	// Codigo para crear el placeholder de las 4 cards
	let arrayPlaceholder = [{title: 'card-title', subtitle: 'Lorem ipsum', label: 'Find Out More!', image: 'https://placehold.co/500x325'}];

	arrayPlaceholder = Array(4).fill().map(() => arrayPlaceholder[0]);
	
	return (
		<NavBar />
		<Jumbotron />
		<Cards valores={arrayPlaceholder}/>
		<Footer />
	);
};

export default Home;
