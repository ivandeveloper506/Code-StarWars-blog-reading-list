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
import Card from "./card.js";
import CardImage from "../../img/people-bg.jpg";

export default function CharacterCard() {
	const { store, actions } = useContext(Context);

	console.log(store.peoples);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container">
				<div className="row d-flex justify-content-center">
					{store.peoples.map((item, index) => {
						return (
							<div key={index} className="col-lg-4 mb-5">
								<Card
									key={index}
									alt={item.name}
									title={item.name}
									gender={item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}
									hairColor={item.hair_color.charAt(0).toUpperCase() + item.hair_color.slice(1)}
									eyeColor={item.eye_color.charAt(0).toUpperCase() + item.eye_color.slice(1)}
									buttonUrl="#"
									buttonLabel="Learn More!"
									imageUrl={CardImage}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
