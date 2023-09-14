import { BrowserRouter,Routes,Route } from 'react-router-dom';
import IndexHouse from '../components/house/indexHouse/IndexHouse';
import CreateHouse from '../components/house/createHouse/CreateHouse';
import EditHouse from '../components/house/editHouse/EditHouse';
import IndexRoom from '../components/room/indexRoom/IndexRoom';
import CreateRoom from '../components/room/createRoom/CreateRoom';
import EditRoom from '../components/room/editRoom/EditRoom';

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
            </Routes>
        </BrowserRouter>
    );
};
export default Router