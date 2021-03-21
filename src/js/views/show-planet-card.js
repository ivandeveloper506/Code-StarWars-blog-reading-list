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
import PlanetCard from "./planet-card.js";
import PlanetCardImage from "../../img/planet-card-image.jpg";

export default function ShowPlanetCard() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container">
				<div className="row d-flex justify-content-center">
					{store.planets.map((item, index) => {
						return (
							<div key={index} className="col-lg-4 mb-5">
								<PlanetCard
									key={index}
									cardId={index}
									alt={item.name}
									name={item.name}
									terrain={item.terrain.charAt(0).toUpperCase() + item.climate.slice(1)}
									climate={item.climate.charAt(0).toUpperCase() + item.climate.slice(1)}
									population={item.population}
									buttonUrl="#"
									buttonLabel="Learn More!"
									imageUrl={PlanetCardImage}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
