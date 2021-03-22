/********************************************************************************/
/* Fecha Creación:  12 Marzo 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal de componente Card, el componente es      */
/*                  generico y se puede invocar con propiedas [props] y dibujar */
/*                  de acuerdo a los valores de las [props].                    */
/********************************************************************************/

import React from "react";
import NotFoundPageImage from "../../img/not-found-page.jpg";
import "../../styles/index.scss";

export default function NotFoundPage() {
	return (
		<div className="container-fluid classTagline flex-column mt-5">
			<div className="container-fluid mainTitle d-flex flex-column text-center mt-5">
				<h1 className="not-found-page-text-class">404 Not Found Page</h1>
			</div>
		</div>
	);
}
