import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 fixed-top navbarClass">
			<Link to="/">
				<span className="navbar-brand text-white mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<h3>
					<span className="badge badge-primary btn-lg mr-5">
						Favorites <span className="badge badge-warning">{0}</span>
					</span>
				</h3>
			</div>
		</nav>
	);
};
