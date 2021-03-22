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
import { Link } from "react-router-dom";
import PropType from "prop-types";
import "../../styles/index.scss";

export default function VehicleCard(props) {
	const { store, actions } = useContext(Context);
	const [favorites, setFavorites] = useState(store.favorites);

	const addFavorite = () => {
		let newFavorite;

		newFavorite = store.vehicles.filter(item => item.name == props.name);

		newFavorite = newFavorite[0];

		let newArray = favorites;

		newArray.push(newFavorite);

		setFavorites(newArray);

		actions.addFavorites(favorites);

		console.log("*** favorites ***");
		console.log(favorites);
	};

	return (
		<div className="d-flex">
			<div className="card text-center mainCard flex-fill border-0">
				<img className="cardImage" src={props.imageUrl} alt={props.alt} width="100%" height="240px" />
				<div className="card-body">
					<h4 className="card-title">{props.name}</h4>
					<p className="card-text text-left m-0">
						Model:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{props.model}
					</p>
					<p className="card-text text-left m-0">
						Vehicle Class:&nbsp;&nbsp;
						{props.vehicle_class}
					</p>
					<p className="card-text text-left m-0">Passengers:&nbsp;&nbsp;&nbsp;&nbsp; {props.passengers}</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">
						<div className="d-flex justify-content-between">
							<div className="col m-0 p-0">
								<Link to={"/vehicle-card-detail/" + props.cardId}>
									<button type="button" className="btn btn-outline-primary">
										{props.buttonLabel}
									</button>
								</Link>
							</div>
							<div className="col m-0 p-0">
								<button type="button" className="btn btn-outline-warning" onClick={() => addFavorite()}>
									♥
								</button>
							</div>
						</div>
					</small>
				</div>
			</div>
		</div>
	);
}

VehicleCard.propTypes = {
	cardId: PropType.number,
	alt: PropType.string,
	name: PropType.string,
	model: PropType.string,
	vehicle_class: PropType.string,
	passengers: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	imageUrl: PropType.string
};
