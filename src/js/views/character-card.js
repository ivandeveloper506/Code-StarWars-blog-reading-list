/********************************************************************************/
/* Fecha Creación:  25 Febrero 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal de componente CardInfo. Este componente   */
/*                  dibuja y renderiza el DOM, mostrando las cuatro cartas.     */
/********************************************************************************/

import React from "react";
import Card from "./card.js";

export default function CharacterCard() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-sm-4">
					<Card
						alt="Card Image 1"
						title="Card Title 1"
						description="Card Description 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsum hic velit cupiditate saepe quidem."
						buttonUrl="#"
						buttonLabel="Find Out More!"
						imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
					/>
				</div>

				<div className="col-sm-4">
					<Card
						alt="Card Image 1"
						title="Card Title 1"
						description="Card Description 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsum hic velit cupiditate saepe quidem."
						buttonUrl="#"
						buttonLabel="Find Out More!"
						imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
					/>
				</div>

				<div className="col-sm-4">
					<Card
						alt="Card Image 1"
						title="Card Title 1"
						description="Card Description 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsum hic velit cupiditate saepe quidem."
						buttonUrl="#"
						buttonLabel="Find Out More!"
						imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
					/>
				</div>
			</div>
		</div>
	);
}
