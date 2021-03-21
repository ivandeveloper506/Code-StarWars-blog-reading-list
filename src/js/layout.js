import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import ShowPeopleCard from "./views/show-people-card";
import PeopleCardDetail from "./views/people-card-detail";
import ShowPlanetCard from "./views/show-planet-card";
import PlanetCardDetail from "./views/planet-card-detail";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/show-people-card">
							<ShowPeopleCard />
						</Route>
						<Route exact path="/people-card-detail/:id">
							<PeopleCardDetail />
						</Route>
						<Route exact path="/show-planet-card">
							<ShowPlanetCard />
						</Route>
						<Route exact path="/planet-card-detail/:id">
							<PlanetCardDetail />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="*">
							<h1>404 Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
