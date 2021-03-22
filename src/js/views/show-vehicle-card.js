/********************************************************************************/
/* Fecha Creación:  25 Febrero 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal de componente CardInfo. Este componente   */
/*                  dibuja y renderiza el DOM, mostrando las cuatro cartas.     */
/********************************************************************************/

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import VehicleCard from "./vehicle-card.js";
import VehicleCardImage from "../../img/vehicle-card-image.jpg";

export default function ShowVehicleCard() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container">
				<div className="row d-flex justify-content-center">
					{store.vehicles.map((item, index) => {
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
									buttonUrl="#"
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
