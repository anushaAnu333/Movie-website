

import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroBanner = ({ filtered }) => {
	const [randomMovie, setRandomMovie] = useState(null);

	useEffect(() => {
		if (filtered && filtered.length > 0) {
			const randomIndex = Math.floor(Math.random() * filtered.length);
			setRandomMovie(filtered[randomIndex]);
		}
	}, [filtered]);

	if (!randomMovie) return null;

	const {
		backdrop_path,
		title,
		overview,
		name, // fallback title
	} = randomMovie;

	return (
		<Box component="a" 
			sx={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path}")`,
				height: { xs: "auto", md: "80vh" },
				backgroundSize: "cover",
				backgroundPosition: "center",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				color: "white",
				px: { xs: 2, sm: 4, md: 8 },
				py: { xs: 6, md: 0 },
				position: "relative",
				flexDirection: { xs: "column", md: "row" },
				textAlign: { xs: "center", md: "left" },
			}}>
			<Box
				sx={{
					zIndex: 2,
					maxWidth: { xs: "100%", sm: "80%", md: "40%" },
				}}>
				<Typography
					variant='h4'
					fontWeight='bold'
					gutterBottom
					sx={{ fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" } }}
				>
					{title || name}
				</Typography>
				<Typography
					variant='body1'
					paragraph
					sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
				>
					{overview}
				</Typography>
				<a href={`https://www.themoviedb.org/movie/${randomMovie.id}`} target="_blank" rel="noopener noreferrer">
				<Button
					variant='contained'
					sx={{
						backgroundColor: "rgb(135, 22, 22)",
						fontSize: { xs: "0.9rem", sm: "1rem" },
						mt: 2,
					}}

				>
					Watch Trailer
				</Button>
				</a>
			</Box>

			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "rgba(0,0,0,0.6)",
				}}
			/>
		</Box>
	);
};

export default HeroBanner;