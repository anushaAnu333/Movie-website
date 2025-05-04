import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieSection = ({ movies }) => (
	<section style={{ padding: "2rem 0" }}>
		<Grid container spacing={3} justifyContent='space-around'>
			{movies.map((movie) => (
				<Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
					<MovieCard movie={movie} />
				</Grid>
			))}
		</Grid>
	</section>
);

export default MovieSection;
