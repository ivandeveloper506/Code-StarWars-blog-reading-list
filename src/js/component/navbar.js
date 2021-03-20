import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light mb-3 fixed-top navbarClass">
			<Link to="/">
				<span className="navbar-brand logo-class text-white mb-0 h1">Star Wars</span>
			</Link>

			<Link to="/show-people-card">
				<span className="navbar-brand text-white ml-5 mb-0 h1">Peoples</span>
			</Link>
			<Link to="/information/planets">
				<span className="navbar-brand text-white ml-3 mb-0 h1">Planets</span>
			</Link>
			<Link to="/information/vehicles">
				<span className="navbar-brand text-white ml-3 mb-0 h1">Vehicles</span>
			</Link>

			<div className="ml-auto">
				<h3>
					<span className="badge badge-primary btn-lg mr-5">
						Favorites <span className="badge badge-warning">{store.favorites.length}</span>
					</span>
				</h3>
			</div>
		</nav>
	);
};
