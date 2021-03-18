/********************************************************************************/
/* Fecha Creación:  12 Marzo 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal de componente Card, el componente es      */
/*                  generico y se puede invocar con propiedas [props] y dibujar */
/*                  de acuerdo a los valores de las [props].                    */
/********************************************************************************/

import React from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import "../../styles/index.scss";

export default function DetailCard() {
	return (
		<div>
			<h1>Estoy en el detalle</h1>
		</div>
	);
}

// DetailCard.propTypes = {
// 	alt: PropType.string,
// 	title: PropType.string,
// 	description: PropType.string,
// 	buttonUrl: PropType.string,
// 	buttonLabel: PropType.string,
// 	imageUrl: PropType.string
// };
