/********************************************************************************/
/* Fecha Creación:  25 Febrero 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal de componente CardInfo. Este componente   */
/*                  dibuja y renderiza el DOM, mostrando las cuatro cartas.     */
/********************************************************************************/

import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import VehicleCard from "./vehicle-card.js";
import VehicleCardImage from "../../img/vehicle-card-image.jpg";

export default function ShowVehicleCard() {
	const { store, actions } = useContext(Context);
	const [searchVehicle, setSearchVehicle] = useState("");

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container mt-3">
				<input
					onChange={event => {
						setSearchVehicle(event.target.value);
					}}
					type="text"
					className="form-control"
					placeholder="Search vehicle..."
					aria-label="Search Vehicle"
					name="SearchVehicle"
					id="SearchVehicle"
				/>
				<div className="row d-flex justify-content-center mt-3">
					{store.vehicles
						.filter(value => {
							if (searchVehicle === "") {
								return value;
							} else if (value.name.toLowerCase().includes(searchVehicle.toLowerCase())) {
								return value;
							}
						})
						.map((item, index) => {
							return (
								<div key={index} className="col-lg-4 mb-5">
									<VehicleCard
										key={index}
										cardId={index}
										alt={item.name}
										name={item.name}
										model={item.model.charAt(0).toUpperCase() + item.model.slice(1)}
										vehicle_class={
											item.vehicle_class.charAt(0).toUpperCase() + item.vehicle_class.slice(1)
										}
										passengers={item.passengers}
										buttonUrl="/vehicle-card-detail/"
										buttonLabel="Learn More!"
										imageUrl={VehicleCardImage}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
