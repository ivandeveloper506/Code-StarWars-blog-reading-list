import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<h3>
					<span className="badge badge-primary btn-lg ml-3">
						Favorites <span className="badge badge-warning">{0}</span>
					</span>
				</h3>
			</div>
		</nav>
	);
};
