import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import NavBar from './NavBar';
import Footer from './Footer';


export default function GuestLayout() {
	const { user } = useAuth();

	// if user is logged in, redirect to profile page
	if (user) {
		return <Navigate to="/profile" />;
	}
	return (
		<>
        <NavBar/>
			<Outlet />
        <Footer/>
		</>
	);
}