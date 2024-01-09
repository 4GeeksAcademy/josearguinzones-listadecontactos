const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			agregarContacto: (full_name, email, address, phone) => {
				let datos = {
					full_name: full_name,
					email: email,
					agenda_slug: "Jose-arguinzones",
					address: address,
					phone: phone
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Jose-arguinzones")
					.then(response => response.json())
					.then(data => setStore({ contactos: data }))
					.catch(error => console.log(error));
			},
			borrarContactos: id => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			editarContacto: (full_name, email, address, phone, id) => {
				let datos = {
					full_name: full_name,
					email: email,
					agenda_slug: "Jose-arguinzones",
					address: address,
					phone: phone
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
