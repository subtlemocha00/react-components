import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

	// for the List component
	const items = [
		{ name: 'Item 1', description: 'Description for Item 1', price: 10 },
		{ name: 'Item 2', description: 'Description for Item 2', price: 15 },
		{ name: 'Item 3', description: 'Description for Item 3', price: 20 },
		{ name: 'Item 4', description: 'Description for Item 4', price: 25 },
		{ name: 'Item 5', description: 'Description for Item 5', price: 30 },
		{ name: 'Item 6', description: 'Description for Item 6', price: 35 },
		{ name: 'Item 7', description: 'Description for Item 7', price: 40 },
		{ name: 'Item 8', description: 'Description for Item 8', price: 45 },
		{ name: 'Item 9', description: 'Description for Item 9', price: 50 },
		{ name: 'Item 10', description: 'Description for Item 10', price: 55 },
		{ name: 'Item 11', description: 'Description for Item 11', price: 60 },
	];

	// for the Navbar component
	const navItems = [
		{ name: 'Home', url: './index.html' },
		{ name: 'Products', url: './index.html' },
		{ name: 'Events', url: './index.html' },
		{ name: 'Contact Us', url: './index.html' }
	]

	return (
		<div className="">
			<Navbar logo="./src/components/Navbar/logo.png" items={navItems} />
			<h1>Components</h1>
			<List items={items}></List>
			{/* <Form name='' email='' phone='' username='' current-password='' /> */}
			{/* <div className="row justify-content-between px-3">
				<Card title="Title" text="Here goes the card text" imageUrl="./src/components/Card/beer_bear.png" buttonText="Go Somewhere" buttonLink="#" height="300" width="auto" />
				<Card title="Title" text="Here goes the card text" imageUrl="./src/components/Card/beer_bear.png" buttonText="Go Somewhere" buttonLink="#" height="300" width="auto" />
				<Card title="Title" text="Here goes the card text" imageUrl="./src/components/Card/beer_bear.png" buttonText="Go Somewhere" buttonLink="#" height="300" width="auto" />
			</div> */}
		</div>
	);
};

export default App;
