import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<MovieList type='popular' title='Popular' />
			<MovieList type='top_rated' title='Top Rated' />
			<MovieList type='upcoming' title='Upcoming' />
		</div>
	);
};

export default App;
