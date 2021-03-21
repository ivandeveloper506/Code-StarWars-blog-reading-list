import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import DropdownItem from "./dropdown-item";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 fixed-top navbarClass">
			<Link to="/">
				<span className="navbar-brand logo-class text-white mb-0 h1">Star Wars Blog</span>
			</Link>

			<Link to="/show-people-card">
				<span className="navbar-brand text-white ml-5 mb-0 h1">Peoples</span>
			</Link>
			<Link to="/show-people-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1">Planets</span>
			</Link>
			<Link to="/show-people-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1">Vehicles</span>
			</Link>

			<div className="ml-auto">
				{/* Invoca el componente que permite crear la lista de items. */}
				<DropdownItem />
			</div>
		</nav>
	);
};
