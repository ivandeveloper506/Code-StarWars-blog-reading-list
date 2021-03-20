import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

export const Navbar = () => {
	const { store } = useContext(Context);

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
				{/* <h3>
					<span className="badge badge-primary btn-lg mr-5">
						Favorites <span className="badge badge-warning">{store.favorites.length}</span>
					</span>
				</h3> */}

				{/* <DropdownButton id="dropdown-item-button" title="Favorites">
					<Dropdown.ItemText>Favorites</Dropdown.ItemText>
					<Dropdown.Item as="button">Action</Dropdown.Item>
					<Dropdown.Item as="button">Another action</Dropdown.Item>
					<Dropdown.Item as="button">Something else</Dropdown.Item>
				</DropdownButton> */}

				<Dropdown as={ButtonGroup}>
					<Button variant="primary">
						<h5>
							Favorites <span className="badge badge-warning">{store.favorites.length}</span>
						</h5>
					</Button>
					<Dropdown.Toggle split variant="warning" id="dropdown-custom-2" />
					<Dropdown.Menu>
						<Dropdown.Item eventKey="1">Action</Dropdown.Item>
						<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
						<Dropdown.Item eventKey="3" active>
							Active Item
						</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
