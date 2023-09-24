import axios from '../../axios/axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

const BookingDates = () => {
  const [id_customer, setIdCustomer] = useState('');
  const [id_room, setIdRoom] = useState('');
  const [checkin_date, setCheckinDate] = useState('');
  const [checkout_date, setCheckoutDate] = useState('');
  const [total_adults, setTotalAdults] = useState('');
  const [total_children, setTotalChildren] = useState('');
  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState('');
  const [family_name, setFamilyName] = useState('');
  const [showError, setShowError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedRoomPrice, setSelectedRoomPrice] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [diffDays, setDiffDays] = useState(0);

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

  const handleRoomChange = (roomId) => {
    const selectedRoom = rooms.find((room) => room.id === roomId);

    if (selectedRoom) {
      setSelectedRoomPrice(selectedRoom.price);
    } else {
      setSelectedRoomPrice(0);
    }
  };

  const handleCheckinDateChange = (e) => {
    const startDate = new Date(e.target.value);
    const endDate = new Date(checkout_date);

    if (!isNaN(startDate) && !isNaN(endDate) && startDate <= endDate) {
      const oneDay = 24 * 60 * 60 * 1000; // 1 día en milisegundos
      const calculatedDiffDays = Math.round((endDate - startDate) / oneDay);

      setCheckinDate(e.target.value);
      setDiffDays(calculatedDiffDays);
    } else {
      setShowError(true);
    }
  };

  const handleCheckoutDateChange = (e) => {
    const startDate = new Date(checkin_date);
    const endDate = new Date(e.target.value);

    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) && startDate <= endDate) {
      const oneDay = 24 * 60 * 60 * 1000; // 1 día en milisegundos
      const calculatedDiffDays = Math.round((endDate - startDate) / oneDay);

      setCheckoutDate(e.target.value);
      setDiffDays(calculatedDiffDays);
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedRoomPrice, diffDays]);

  const calculateTotalPrice = () => {
    const roomPrice = parseFloat(selectedRoomPrice);
    
    if (!isNaN(roomPrice) && diffDays > 0) {
      const totalPrice = diffDays * roomPrice;
      setShowError(false);
      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  };

  const store = async (e) => {
    e.preventDefault();

    await axios.post('admin/booking', {
      id_customer: id_customer,
      id_room: id_room,
      checkin_date: checkin_date,
      checkout_date: checkout_date,
      total_adults: total_adults,
      total_children: total_children,
    });
    navigate(`/booking/success/${id_customer}`);
  };

  return (
    <section className=" bg-gray-100 dark:bg-gray-900 mx-auto">
      <div className="flex flex-col w-4/5 items-center  py-8 mx-auto md:h-screen lg:py-8">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <button
              type="button"
              className="text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to={'/admin/house'}>Volver</Link>
            </button>
            <h1 className="text-xl font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
              Detalles de la reserva
            </h1>
            <form className="space-y-4 md:space-y-6" method="post" onSubmit={store}>
              <div>
                <label
                  htmlFor="room"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {name} {family_name}
                </label>
                <input
                  value={id}
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Habitación
                </label>
                <select
                  id="room"
                  name="id_room"
                  onChange={(e) => {
                    setIdRoom(e.target.value);
                    handleRoomChange(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Selecciona una habitación</option>
                  {rooms.map((room) => (
                    <option value={room.id} key={room.id}>
                      {room.house.name}-{room.name} ({room.price}€)
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleCheckinDateChange}
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleCheckoutDateChange}
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setTotalChildren(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-[#213555] dark:text-white"
                >
                  Precio
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={totalPrice}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <p>Noches: {diffDays}</p>
                <p>Precio total: {totalPrice} €</p>
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
