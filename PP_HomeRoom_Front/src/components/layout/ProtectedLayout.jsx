import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from '../../js/axios';
import { useAuth } from '../../contexts/AuthContext';


export default function DefaultLayout() {
	const { user, setUser } = useAuth();

	// check if user is logged in or not from server
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/user');
				if (resp.status === 200) {
					setUser(resp.data.data);
				}
			} catch (error) {
				if (error.response.status === 401) {
					localStorage.removeItem('user');
					window.location.href = '/';
				}
			}
		})();
	}, []);

	// if user is not logged in, redirect to login page
	if (!user) {
		return <Navigate to="/" />;
	}

	// logout user
	const handleLogout = async () => {
		try {
			const resp = await axios.post('/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
				window.location.href = '/';
			}
		} catch (error) {
			console.log(error);
		}
	};
    return (
		<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home Room</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/house">Alojamientos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/room">Habitaciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Reservas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/customer">Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Ventas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Calendario</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    );
}