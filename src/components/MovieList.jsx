import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import MovieSection from "./MovieSection";
import HeroBanner from "./HeroBanner";

// Container for the entire section
const Section = styled.section`
	padding: 2rem;
	background: #f4f6f8;
`;

// Header with title and controls
const Header = styled.header`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
`;

const Title = styled.h2`
	font-size: 2rem;
	color: rgb(135, 22, 22);
	margin: 0;
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

const Select = styled.select`
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 0.9rem;
	background: white;
	cursor: pointer;
	&:focus {
		outline: none;
		border-color: #888;
	}
`;

const MovieList = ({ type, title }) => {
	const [movies, setMovies] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [minRating, setMinRating] = useState(0);
	const [sort, setSort] = useState({ by: "default", order: "asc" });

	useEffect(() => {
		fetchMovies();
	}, [type]);
	useEffect(() => {
		applyFilterSort();
	}, [minRating, sort]);

	const fetchMovies = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${type}?api_key=183928bab7fc630ed0449e4f66ec21bd`
		);
		const data = await res.json();
		setMovies(data.results);
		setFiltered(data.results);
	};

	const applyFilterSort = () => {
		let list = [...movies];
		if (minRating) {
			list = list.filter((m) => m.vote_average >= minRating);
		}
		if (sort.by !== "default") {
			list = _.orderBy(list, [sort.by], [sort.order]);
		}
		setFiltered(list);
	};

	const handleRating = (rate) => {
		setMinRating((prev) => (prev === rate ? 0 : rate));
	};

	const handleSort = (e) => {
		const { name, value } = e.target;
		setSort((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<>
			<HeroBanner filtered={filtered} />
			<Section id={type}>
				<Header>
					<Title>{title}</Title>
					<Controls>
						<Select name='by' value={sort.by} onChange={handleSort}>
							<option value='default'>Sort By</option>
							<option value='release_date'>Release Date</option>
							<option value='vote_average'>Rating</option>
						</Select>
						<Select name='order' value={sort.order} onChange={handleSort}>
							<option value='asc'>Asc</option>
							<option value='desc'>Desc</option>
						</Select>
					</Controls>
				</Header>

				<MovieSection movies={filtered.slice(0, 8)} />
				<MovieSection movies={filtered.slice(8, 16)} />
			</Section>
		</>
	);
};

export default MovieList;
