import axios from '../../axios/axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

const BookingDates = () => {
  const [id_customer, setIdCustomer] = useState('');
  const [id_room, setIdRoom] = useState('');
  const [checkin_date, setCheckinDate] = useState('');
  const [checkout_date, setCheckoutDate] = useState('');
  const [nights, setNights] = useState(0);
  const [total_adults, setTotalAdults] = useState('');
  const [total_children, setTotalChildren] = useState('');
  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState('');
  const [family_name, setFamilyName] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const getCustomerById = async () => {
      const response = await axios.get(`admin/customer/${id}`);
      setName(response.data.name);
      setFamilyName(response.data.family_name);
      setIdCustomer(response.data.id);
    };
    getCustomerById();
  }, [id]);

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
    if (checkin_date && checkout_date) {
      if (new Date(checkout_date) <= new Date(checkin_date)) {
        setShowError(true);
        setNights(0); 
      } else {
        const checkinDate = new Date(checkin_date);
        const checkoutDate = new Date(checkout_date);
        const timeDifference = checkoutDate.getTime() - checkinDate.getTime();
        const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));
        setNights(nights);
      }
    } else {
      setNumNights(0);
    }
  }, [checkin_date, checkout_date]);

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
      nights: nights,
      total_adults: total_adults,
      total_children: total_children,
       
    });
    const bookingId = response.data.id;
    navigate(`/booking/success/${id_customer}/${bookingId}`);
  };

  return (
    <section className="flex bg-gray-100 w-full">
      <button type="button" className="absolute my-8 mx-14 text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/'}>Volver</Link></button>
      <div className="flex flex-col w-full mb-8 items-center  py-8 mx-auto md:h-4/5 lg:py-8">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-sm font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
              Detalles de la reserva
            </h1>
            <form className="space-y-4 md:space-y-6" method="post" onSubmit={store}>
              <div >
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-[#213555] dark:text-white"
                >
                  {name} {family_name}
                </label>
                <input hidden
                  value={id_customer}
                  type="text"
                  name="id_customer"
                  id="name"
                  className="invisible"
                  onChange={(e) => setIdCustomer(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="room"
                  className="block mb-1 text-sm font-medium text-[#213555] dark:text-white"
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
                  className="block mb-1 text-sm font-medium text-[#213555] dark:text-white"
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
                  className="block mb-1 text-sm font-medium text-[#213555] dark:text-white"
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
                  htmlFor="nights"
                  className="block mb-1 text-sm font-medium text-[#213555] dark:text-white"
                >
                  Número de noches: 
                </label>
                <input
                  value={nights}
                  type="number"
                  name="total_adults"
                  id="nights"
                  className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setNights(e.target.value)}
                  required
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="adults"
                  className="block mb-1 text-sm font-medium text-[#213555] dark:text-white"
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
                  className="block mb-1 text-sm font-medium text-[#213555] dark:text-white"
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

export default BookingDates;
