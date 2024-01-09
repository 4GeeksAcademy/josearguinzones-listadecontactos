import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { ModalEdit } from "../component/modal_edit.js";

import { Context } from "../store/appContext.js";
export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerContactos();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactos.map(item => (
							<ContactCard
								onDelete={() => setState({ showModal: true, id: item.id })}
								onEdit={() => setState({ showModal: true, id: item.id })}
								full_name={item.full_name}
								email={item.email}
								phone={item.phone}
								address={item.address}
								id={item.id}
								key={item.id}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={state.id} />
			<ModalEdit show={state.showModal} onClose={() => setState({ showModal: false })} id={state.id} />
		</div>
	);
};
