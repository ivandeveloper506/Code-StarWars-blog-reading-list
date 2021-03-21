/********************************************************************************/
/* Fecha Creación:  12 Marzo 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal de componente Card, el componente es      */
/*                  generico y se puede invocar con propiedas [props] y dibujar */
/*                  de acuerdo a los valores de las [props].                    */
/********************************************************************************/

import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

export default function DropdownItem() {
	const { store, actions } = useContext(Context);
	const [favorites, setFavorites] = useState([]);

	const deleteFavorite = deleteItem => {
		const deleteFavorite = store.favorites.filter(item => item.name !== deleteItem);

		setFavorites(deleteFavorite);

		actions.addFavorites(deleteFavorite);

		console.log("*** store.favorites ***");
		console.log(store.favorites);
		console.log("*** deleteFavorite***");
		console.log(deleteFavorite);
	};

	return (
		<Dropdown as={ButtonGroup}>
			<Button variant="primary">
				<h5>
					Favorites <span className="badge badge-warning">{store.favorites.length}</span>
				</h5>
			</Button>
			<Dropdown.Toggle split variant="warning" id="dropdown-custom-2" />
			<Dropdown.Menu>
				{store.favorites.length === 0 ||
				store.favorites.length === null ||
				store.favorites.length === undefined ? (
					<Dropdown.Item eventKey={0} className="dropdown-item-class">
						{"(Vacia)"}
					</Dropdown.Item>
				) : (
					store.favorites.map((item, index) => {
						return (
							<div key={index}>
								<Dropdown.Item eventKey={index} className="dropdown-item-class">
									<div className="row">
										<div className="col-10">{item.name}</div>
										<div className="col-2">
											<i className="fas fa-trash" onClick={() => deleteFavorite(item.name)} />
										</div>
									</div>
								</Dropdown.Item>
							</div>
						);
					})
				)}
			</Dropdown.Menu>
		</Dropdown>
	);
}