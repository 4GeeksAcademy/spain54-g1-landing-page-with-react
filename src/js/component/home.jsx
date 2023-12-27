import React from "react";

import { NavBar } from "./NavBar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

const Home = () => {
	// Codigo para crear el placeholder de las 4 cards
	let arrayPlaceholder = [
		{ title: 'Card Title', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', label: 'Find Out More!', image: 'https://placehold.co/500x325' },
		{ title: 'Card Title', subtitle: 'Integer et egestas turpis. Fusce semper, felis congue blandit semper, nulla quam molestie arcu, a fermentum ipsum nisl id arcu. In faucibus quam vel libero vehicula sodales. Duis ut tellus vel quam euismod euismod eu nec sapien.', label: 'Find Out More!', image: 'https://placehold.co/500x325' },
		{ title: 'Card Title', subtitle: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at molestie ipsum. Aenean at lectus vel nisi dignissim scelerisque.', label: 'Find Out More!', image: 'https://placehold.co/500x325' },
		{ title: 'Card Title', subtitle: 'In hac habitasse platea dictumst. Fusce ultrices at nisl ac porta. Quisque egestas blandit nunc ac ultricies. Vestibulum in leo vitae sem fringilla vehicula sit amet rutrum turpis. Nullam at nulla nibh.', label: 'Find Out More!', image: 'https://placehold.co/500x325' },
	];

	return (
		<>
			<NavBar />
			<div className="container" id="webContent">
				<Jumbotron subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas turpis. Fusce semper, felis congue blandit semper, nulla quam molestie arcu, a fermentum ipsum nisl id arcu."/>
				<Cards valores={arrayPlaceholder} />
			</div>
			<Footer />
		</>
	);
};

export default Home;
