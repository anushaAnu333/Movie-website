
import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  display: block;
  background-color: #111;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.5);
  text-decoration: none;
  color: white;
  transition: transform 0.3s;
  &:hover { transform: translateY(-10px); }
  width: 100%;
  max-width: 320px;
  height: 100%;
`;

const Poster = styled.img`
  width: 100%;
  height: 360px;
    object-fit: cover;
  

`;

const Info = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
`;

const Meta = styled.div`
  font-size: 0.85rem;
  opacity: 0.75;
  margin-bottom: 0.75rem;
`;

const Overview = styled.p`
  font-size: 0.8rem;
  line-height: 1.4;
  color: #aaa;
  
`;

const MovieCard = ({ movie }) => {
  return (
    <Card href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Info>
        <Title>{movie.title}</Title>
        <Meta>{movie.release_date} · {movie.vote_average} ⭐</Meta>
        <Overview>{movie.overview.slice(0, 80)}…</Overview>
      </Info>
    </Card>
  );
};

export default MovieCard;