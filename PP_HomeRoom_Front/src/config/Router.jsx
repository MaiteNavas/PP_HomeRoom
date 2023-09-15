import { BrowserRouter,Routes,Route } from 'react-router-dom';
import IndexHouse from '../pages/admin/house/indexHouse/IndexHouse';
import CreateHouse from '../pages/admin/house/createHouse/CreateHouse';
import EditHouse from '../pages/admin/house/editHouse/EditHouse';
import IndexRoom from '../pages/admin/room/indexRoom/IndexRoom';
import CreateRoom from '../pages/admin/room/createRoom/CreateRoom';
import EditRoom from '../pages/admin/room/editRoom/EditRoom';
import IndexCustomer from '../pages/admin/customer/indexCustomer/IndexCustomer';
import CreateCustomer from '../pages/admin/customer/createCustomer/CreateCustomer';
import EditCustomer from '../pages/admin/customer/editCustomer/EditCustomer';

const Router = () => {
    return(
        <BrowserRouter>
                <Routes>
                <Route path='admin/house' element={ <IndexHouse/>} />
                <Route path='admin/house/create' element={ <CreateHouse/>} />
                <Route path='admin/house/edit/:id' element={ <EditHouse/>} />
                <Route path='admin/room' element={ <IndexRoom/>} />
                <Route path='admin/room/create' element={ <CreateRoom/>} />
                <Route path='admin/room/edit/:id' element={ <EditRoom/>} />
                <Route path='admin/customer' element={ <IndexCustomer/>} />
                <Route path='admin/customer/create' element={ <CreateCustomer/>} />
                <Route path='admin/customer/edit/:id' element={ <EditCustomer/>} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router