import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {Link} from 'react-router-dom';

export default function Profile() {
	const { user } = useAuth();
	return (
		<>
			<div className="block p-10 bg-white border border-gray-200 shadow-sm rounded-lg shadowdark:border-gray-700">
				<h5 className="my-2 text-2xl font-bold tracking-tight">
					Bienvenido, {user.name}
				</h5>
				<p className="font-normal text-[#213555]">Correo electrónico: {user.email}</p>
			</div>
		</>
	);
}
