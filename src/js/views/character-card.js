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

export default function CharacterCard() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container mt-5">
				<div className="row">
					<div className="col-sm-4">
						<Card
							alt="Card Image 1"
							title="Card Title 1"
							gender="Gender"
							hairColor="Hair Color"
							eyeColor="Eye Color"
							buttonUrl="#"
							buttonLabel="Find Out More!"
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
						/>
					</div>

					<div className="col-sm-4">
						<Card
							alt="Card Image 1"
							title="Card Title 1"
							gender="Gender"
							hairColor="Hair Color"
							eyeColor="Eye Color"
							buttonUrl="#"
							buttonLabel="Find Out More!"
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
						/>
					</div>

					<div className="col-sm-4">
						<Card
							alt="Card Image 1"
							title="Card Title 1"
							gender="Gender"
							hairColor="Hair Color"
							eyeColor="Eye Color"
							buttonUrl="#"
							buttonLabel="Find Out More!"
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
