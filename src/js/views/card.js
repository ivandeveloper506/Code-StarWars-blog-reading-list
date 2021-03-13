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

export default function Card(props) {
	return (
		<div className="d-flex">
			<div className="card text-center mainCard flex-fill">
				<img src={props.imageUrl} alt={props.alt} width="100%" height="240px" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">
						<div className="d-flex justify-content-between">
							<div className="col">
								<Link to="/card-detail">
									<button type="button" className="btn btn-outline-primary">
										Learn More!
									</button>
								</Link>
							</div>
							<div className="col">
								<button type="button" className="btn btn-outline-warning">
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

Card.propTypes = {
	alt: PropType.string,
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	imageUrl: PropType.string
};
