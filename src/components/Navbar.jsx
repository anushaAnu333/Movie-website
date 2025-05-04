
import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
	background: rgb(135, 22, 22);
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	position: sticky;
	top: 0;
	z-index: 100;
	flex-wrap: wrap;
`;

const Title = styled.h1`
	font-size: 1.75rem;
	color: #fff;
	font-weight: 800;
	letter-spacing: 2px;
	text-transform: uppercase;
	margin: 0;
`;

const Hamburger = styled.button`
	display: none;
	background: none;
	border: none;
	color: white;
	font-size: 1.75rem;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
	}
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	@media (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		align-items: stretch;
		margin-top: 1rem;
		padding: 1rem;
		background: white;
    
		border-radius: 8px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
		display: ${({ open }) => (open ? "flex" : "none")};
	}
`;

const NavLink = styled.a`
	color: ${({ open }) => (open ? "rgb(135, 22, 22)" : "white")};
	font-weight: 500;
	font-size: 1rem;
	text-decoration: none;
	padding: 0.75rem 1rem;
	border-radius: 6px;
	transition: background 0.2s ease;

	&:hover {
		background: rgba(255, 255, 255, 0.2);
		color: #fff;
	}
`;

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Nav>
			<Title>movies</Title>
			<Hamburger onClick={() => setIsOpen((prev) => !prev)}>
				☰
			</Hamburger>
			<Links open={isOpen}>
				<NavLink href='#popular'>Popular</NavLink>
				<NavLink href='#top_rated'>Top Rated</NavLink>
				<NavLink href='#upcoming'>Upcoming</NavLink>
			</Links>
		</Nav>
	);
};

export default Navbar;