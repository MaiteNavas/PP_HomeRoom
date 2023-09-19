import { BrowserRouter,Routes,Route } from 'react-router-dom';
import IndexHouse from '../pages/admin/house/IndexHouse';
import CreateHouse from '../pages/admin/house/CreateHouse';
import EditHouse from '../pages/admin/house/EditHouse';
import IndexRoom from '../pages/admin/room/IndexRoom';
import CreateRoom from '../pages/admin/room/CreateRoom';
import EditRoom from '../pages/admin/room/EditRoom';
import IndexCustomer from '../pages/admin/customer/IndexCustomer';
import CreateCustomer from '../pages/admin/customer/CreateCustomer';
import EditCustomer from '../pages/admin/customer/EditCustomer';
import Home from '../pages/Home';
import Houses from '../pages/houses/Houses';
import BookingCustomer from '../pages/booking/BookingCustomer';
import BookingDates from '../pages/booking/BookingDates';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { HomeAdmin } from '../pages/admin/HomeAdmin';
import ProtectedLayout from '../components/layout/ProtectedLayout';
import GuestLayout from '../components/layout/GuestLayout';
const Router = () => {
    return(
        <BrowserRouter>
                <Routes>
                <Route element={<GuestLayout/>}>
                    <Route path='/' element={ <Home/>} />
                    <Route path='/alojamientos' element={ <Houses/>} />
                    <Route path='/reservas' element={ <BookingCustomer/>} />
                    <Route path='/booking/dates/:id' element={ <BookingDates/>} />
                    <Route path='/register' element={ <Register/>} />
                    <Route path='/login' element={ <Login/>} />
                </Route>
                <Route element={<ProtectedLayout/>}>
                    <Route path='/admin' element={ <HomeAdmin/>} />
                    <Route path='admin/house' element={ <IndexHouse/>} />
                    <Route path='admin/house/create' element={ <CreateHouse/>} />
                    <Route path='admin/house/edit/:id' element={ <EditHouse/>} />
                    <Route path='admin/room' element={ <IndexRoom/>} />
                    <Route path='admin/room/create' element={ <CreateRoom/>} />
                    <Route path='admin/room/edit/:id' element={ <EditRoom/>} />
                    <Route path='admin/customer' element={ <IndexCustomer/>} />
                    <Route path='admin/customer/create' element={ <CreateCustomer/>} />
                    <Route path='admin/customer/edit/:id' element={ <EditCustomer/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;