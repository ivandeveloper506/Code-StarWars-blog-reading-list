import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, NavLink } from "react-router-dom";
import "../../styles/index.scss";
import DropdownItem from "./dropdown-item";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 fixed-top navbarClass">
			<Link to="/">
				<span className="navbar-brand logo-class text-white mb-0 h1">Star Wars Blog</span>
			</Link>

			<NavLink to="/show-people-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1" activeClassName="active">
					Peoples
				</span>
			</NavLink>
			<NavLink to="/show-planet-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1" activeClassName="active">
					Planets
				</span>
			</NavLink>
			<NavLink to="/show-vehicle-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1" activeClassName="active">
					Vehicles
				</span>
			</NavLink>

			<div className="ml-auto">
				{/* Invoca el componente que permite crear la lista de items. */}
				<DropdownItem />
			</div>
		</nav>
	);
};
