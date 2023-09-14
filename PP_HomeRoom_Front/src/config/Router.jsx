import { BrowserRouter,Routes,Route } from 'react-router-dom';
import IndexHouse from '../components/house/indexHouse/IndexHouse'
import CreateHouse from '../components/house/createHouse/CreateHouse'
import EditHouse from '../components/house/editHouse/EditHouse'

const Router = () => {
    return(
        <BrowserRouter>
                <Routes>
                <Route path='admin/house' element={ <IndexHouse/>} />
                <Route path='admin/house/create' element={ <CreateHouse/>} />
                <Route path='admin/house/edit/:id' element={ <EditHouse/>} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router