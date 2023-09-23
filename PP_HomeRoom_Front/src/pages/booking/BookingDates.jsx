import axios from '../../axios/axios';
import {useState, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

const BookingDates = () => {
  const [id_customer, setIdCustomer] = useState('');
  const [id_room, setIdRoom] = useState('');
  const [checkin_date, setCheckinDate] = useState('');
  const [checkout_date, setCheckoutDate] = useState('');
  const [total_adults, setTotalAdults] = useState('');
  const [total_children, setTotalChildren] = useState('');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState('');
  const [family_name, setFamilyName] = useState('');



  const navigate = useNavigate();

  const {id} = useParams();
  useEffect( () =>{
      const getCustomerById = async () => {
          const response = await axios.get(`admin/customer/${id}`);
          setName(response.data.name);
          setFamilyName(response.data.family_name);
          setIdCustomer(response.data.id);

      };
      getCustomerById();    
  }, []);

  useEffect ( ()=> {
    getAllRooms();
}, []);

const getAllRooms = async () => {
    try {
        const response = await axios.get('admin/room');
        if (Array.isArray(response.data.data)) {
            setRooms(response.data.data);
        } else {
            console.error('La respuesta de la API no es un array válido.', response.data);
        }
    } catch (error) {
        console.error('Error al obtener habitaciones desde la API:', error);
    }
};

  const store = async (e) => {
      e.preventDefault();
      await axios.post('admin/booking', {id_customer: id_customer, id_room: id_room, checkin_date: checkin_date, checkout_date: checkout_date, total_adults: total_adults, total_children: total_children, price: price});
      navigate(`/booking/success/${customerId}`);
  };

return (


<section className=" bg-gray-100 dark:bg-gray-900 mx-auto">
  <div className="flex flex-col w-4/5 items-center  py-8 mx-auto md:h-screen lg:py-8">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <button type="button" class="text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/admin/house'}>Volver</Link></button>
                  <h1 className="text-xl font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
                      Detalles de la reserva
                  </h1>
                  <form
                      className="space-y-4 md:space-y-6"
                      method="post"
                      onSubmit={store}
                      >
                        <div>
                        <label
                                htmlFor="room"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {name} {family_name}
                            </label>
                          <input
                              value={id}
                              type="text"
                              name="id_customer"
                              id="name"
                              className="invisible"
                          />
                        </div> 
                      <div>
                            <label
                                htmlFor="room"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Habitación
                            </label>
                            <select id="room" name="id_room" onChange={ (e)=> setIdRoom(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Selecciona una habitación</option>
                                { rooms.map( (room) => (
                                <option value={room.id} key={room.id} >{room.house.name}-{room.name}</option>
                                ))}  
                            </select>
                        </div>
                      <div>
                          <label
                              htmlFor="checkin_date"
                              className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                              Fecha de entrada
                          </label>
                          <input
                              type="date"
                              name="checkin_date"
                              id="checkin_date"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              onChange={ (e)=> setCheckinDate(e.target.value)}
                              required
                          />
                      </div>
                      <div>
                          <label
                              htmlFor="checkout_date"
                              className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                              Fecha de salida
                          </label>
                          <input
                              type="date"
                              name="checkout_date"
                              id="checkout_date"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              onChange={ (e)=> setCheckoutDate(e.target.value)}
                              required
                          />
                      </div>
                      <div>
                          <label
                              htmlFor="adults"
                              className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                              Adultos
                          </label>
                          <input
                              type="text"
                              name="total_adults"
                              id="adults"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              onChange={ (e)=> setTotalAdults(e.target.value)}
                              required
                          />
                      </div>
                      <div>
                          <label
                              htmlFor="children"
                              className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                              Niños
                          </label>
                          <input
                              type="text"
                              name="total_children"
                              id="children"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              onChange={ (e)=> setTotalChildren(e.target.value)}
                              required
                          />
                      </div>
                      <div>
                          <label
                              htmlFor="price"
                              className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                              Precio
                          </label>
                          <input
                              type="text"
                              name="price"
                              id="price"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              onChange={ (e)=> setPrice(e.target.value)}
                              required
                          />
                      </div>
                      
                      <button
                          type="submit"
                          className="w-full text-white bg-[#213555] hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          Siguiente
                      </button>
                  </form>
      </div>
    </div>
  </div>
</section>
)
}

export default BookingDates