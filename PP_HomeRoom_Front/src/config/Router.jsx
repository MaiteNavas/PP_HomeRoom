import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/admin/Profile';
import ProtectedLayout from '../components/ProtectedLayout';
import GuestLayout from '../components/GuestLayout';
import Home from '../pages/Home';
import IndexRoom from '../pages/admin/room/IndexRoom';
import IndexHouse from '../pages/admin/house/IndexHouse';
import Contact from '../pages/Contact';
import Houses from '../pages/Houses';
import Rooms from '../pages/Rooms';
import CreateHouse from '../pages/admin/house/CreateHouse';
import CreateRoom from '../pages/admin/room/CreateRoom';
import EditHouse from '../pages/admin/house/EditHouse';
import EditRoom from '../pages/admin/room/EditRoom';
import IndexCustomer from '../pages/admin/customer/IndexCustomer';
import CreateCustomer from '../pages/admin/customer/CreateCustomer';
import EditCustomer from '../pages/admin/customer/EditCustomer';


const router = createBrowserRouter([
	{
		path: '/',
		element: <GuestLayout />,
		children: [
            {
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/house',
				element: <Houses/>,
			},
			{
				path: '/room',
				element: <Rooms/>,
			},
			{
				path: '/contact',
				element: <Contact/>,
			},
		],
	},
	{
		path: '/',
		element: <ProtectedLayout />,
		children: [
            {
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/admin/house',
				element: <IndexHouse/>,
			},
			{
				path: '/admin/house/create',
				element: <CreateHouse/>,
			},
			{
				path: '/admin/house/edit/:id',
				element: <EditHouse/>,
			},
			{
				path: '/admin/room',
				element: <IndexRoom/>,
			},
			{
				path: '/admin/room/create',
				element: <CreateRoom/>,
			},
			{
				path: '/admin/room/edit/:id',
				element: <EditRoom/>,
			},
			{
				path: '/admin/customer',
				element: <IndexCustomer/>,
			},
			{
				path: '/admin/customer/create',
				element: <CreateCustomer/>,
			},
			{
				path: '/admin/customer/edit/:id',
				element: <EditCustomer/>,
			},

		],
	},
]);

export default router;