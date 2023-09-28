import axios from '../../../axios/axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';

function CreateBooking(){

  const [id_customer, setIdCustomer] = useState('');
  const [id_room, setIdRoom] = useState('');
  const [checkin_date, setCheckinDate] = useState('');
  const [checkout_date, setCheckoutDate] = useState('');
  const [total_adults, setTotalAdults] = useState('');
  const [total_children, setTotalChildren] = useState('');
  const [rooms, setRooms] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showError, setShowError] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
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

  useEffect(() => {
    getAllCustomers();
  }, []);

  const getAllCustomers = async () => {
    try {
      const response = await axios.get('admin/customer');
      if (Array.isArray(response.data.data)) {
        setCustomers(response.data.data);
      } else {
        console.error('La respuesta de la API no es un array válido.', response.data);
      }
    } catch (error) {
      console.error('Error al obtener habitaciones desde la API:', error);
    }
  };

  const store = async (e) => {
    e.preventDefault();
    if (new Date(checkout_date) <= new Date(checkin_date)) {
        setShowError(true);
        return; 
      }

    const response = await axios.post('admin/booking', {
      id_customer: id_customer,
      id_room: id_room,
      checkin_date: checkin_date,
      checkout_date: checkout_date,
      total_adults: total_adults,
      total_children: total_children,
       
    });

    navigate(`/admin/booking`);
  };

  return (

    <section className="bg-gray-100 dark:bg-gray-900 mx-auto">
      <button type="button" className="absolute my-8 mx-14 text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/admin/house'}>Volver</Link></button>
      <div className="flex flex-col w-4/5 items-center  py-8 mx-auto md:h-full lg:py-8">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
              Nueva reserva
            </h1>
            <form className="space-y-4 md:space-y-6" method="post" onSubmit={store}>
              <div>
                <label
                  htmlFor="customer"
                  className="block mb-2 text-sm font-medium text-[#213555] dark:text-white"
                >
                  Cliente
                </label>
                <select
                  id="customer"
                  name="id_customer"
                  onChange={(e) => {
                    setIdCustomer(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Selecciona un cliente</option>
                  {customers.map((customer) => (
                    <option value={customer.id} key={customer.id}>
                      {customer.name} {customer.family_name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="room"
                  className="block mb-2 text-sm font-medium text-[#213555] dark:text-white"
                >
                  Habitación
                </label>
                <select
                  id="room"
                  name="id_room"
                  onChange={(e) => {
                    setIdRoom(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Selecciona una habitación</option>
                  {rooms.map((room) => (
                    <option value={room.id} key={room.id}>
                      {room.house.name}-{room.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="checkin_date"
                  className="block mb-2 text-sm font-medium text-[#213555] dark:text-white"
                >
                  Fecha de entrada
                </label>
                <input
                  type="date"
                  name="checkin_date"
                  id="checkin_date"
                  className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setCheckinDate(e.target.value)}
                  required
                />
              </div>
              <div>
                {showError && (
                  <p className="text-red-500">*La fecha de salida debe ser posterior a la fecha de entrada.</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="checkout_date"
                  className="block mb-2 text-sm font-medium text-[#213555] dark:text-white"
                >
                  Fecha de salida
                </label>
                <input
                  type="date"
                  name="checkout_date"
                  id="checkout_date"
                  className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setCheckoutDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="adults"
                  className="block mb-2 text-sm font-medium text-[#213555] dark:text-white"
                >
                  Adultos
                </label>
                <input
                  type="text"
                  name="total_adults"
                  id="adults"
                  className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setTotalAdults(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="children"
                  className="block mb-2 text-sm font-medium text-[#213555] dark:text-white"
                >
                  Niños
                </label>
                <input
                  type="text"
                  name="total_children"
                  id="children"
                  className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setTotalChildren(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#213555] hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Siguiente
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBooking;
