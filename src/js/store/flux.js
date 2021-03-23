const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			loadPeoples: async () => {
				let localStoragePeoples = localStorage.getItem("peoplesAPI");

				if (localStoragePeoples === null || localStoragePeoples === undefined) {
					const url = "https://swapi.dev/api/people/";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ peoples: data.results });

					localStorage.setItem("peoplesAPI", JSON.stringify(data.results));
				} else {
					setStore({ peoples: JSON.parse(localStoragePeoples) });
				}
			},
			loadPlanets: async () => {
				let localStoragePlanets = localStorage.getItem("planetsAPI");

				if (localStoragePlanets === null || localStoragePlanets === undefined) {
					const url = "https://swapi.dev/api/planets/";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ planets: data.results });

					localStorage.setItem("planetsAPI", JSON.stringify(data.results));
				} else {
					setStore({ planets: JSON.parse(localStoragePlanets) });
				}
			},
			loadVehicles: async () => {
				let localStorageVehicles = localStorage.getItem("vehiclesAPI");

				if (localStorageVehicles === null || localStorageVehicles === undefined) {
					const url = "https://swapi.dev/api/vehicles/";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ vehicles: data.results });

					localStorage.setItem("vehiclesAPI", JSON.stringify(data.results));
				} else {
					setStore({ vehicles: JSON.parse(localStorageVehicles) });
				}
			},
			addFavorite: favoriteParam => {
				const store = getStore();
				let newFavorite = store.favorites;

				favoriteParam = favoriteParam[0];
				newFavorite.push(favoriteParam);

				setStore({ favorites: newFavorite });
			},
			deleteFavorite: favoriteParam => {
				setStore({ favorites: favoriteParam });
			}
		}
	};
};

export default getState;
