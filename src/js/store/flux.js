const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
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
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorites: param => {
				setStore({ favorites: param });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
