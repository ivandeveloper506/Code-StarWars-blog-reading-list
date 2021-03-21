import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, NavLink } from "react-router-dom";
import "../../styles/index.scss";
import DropdownItem from "./dropdown-item";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 fixed-top navbarClass">
			<NavLink exact to="/">
				<span className="navbar-brand logo-class text-white mb-0 h1" activeClassName="active">
					Star Wars Blog
				</span>
			</NavLink>

			<NavLink exact to="/show-people-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1" activeClassName="active">
					Peoples
				</span>
			</NavLink>
			<NavLink exact to="/show-planet-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1" activeClassName="active">
					Planets
				</span>
			</NavLink>
			<NavLink exact to="/show-people-card2">
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
