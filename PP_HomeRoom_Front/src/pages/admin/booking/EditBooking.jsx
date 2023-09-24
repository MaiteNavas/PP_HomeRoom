import axios from '../../../axios/axios';
import React,{useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';


function EditBooking(){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [id_house, setIdHouse] = useState('');
    const [price, setPrice] = useState('');
    const [rooms, setRooms] = useState([]);
    const [bookings_status, setBookingsStatus] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');

    useEffect ( ()=> {
        getAllRooms();
    }, []);
    const getAllRooms = async () => {
        try {
            const response = await axios.get('admin/room');
            console.log(response.data);
            setRooms(response.data.data);
        } catch (error) {
            console.error('Error al obtener habitaciones:', error);
        }
    };

    useEffect ( ()=> {
        getAllBookingStatus();
    }, []);
    const getAllBookingStatus = async () => {
        const response = await axios.get('admin/booking_status');
        setBookingsStatus(response.data.data);
    };
    
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect( () =>{
        const getBookingById = async () => {
            const response = await axios.get(`admin/booking/${id}`);
            setName(response.data.name);
            setDescription(response.data.description);
            setIdHouse(response.data.id_house);
            setPrice(response.data.price);
        };
        getBookingById();    
    }, []);
    
    const update = async (e) => {
        e.preventDefault();
        await axios.put(`admin/booking/${id}`, {
            name: name,
            description: description,
            id_house: id_house,
            price: price,
        });
        navigate('/admin/room');
    }


    return (
    <>

<section className=" bg-gray-100 dark:bg-gray-900 mx-auto">
		<div className="flex flex-col w-4/5 items-center  py-8 mx-auto md:h-screen lg:py-8">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <button type="button" class="text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/admin/room'}>Volver</Link></button>
                    <h1 className="text-xl font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
                        Editar reserva: {name} 
                    </h1>
                    <form
                        className="space-y-4 md:space-y-6"
                        method="post"
                        onSubmit={update}
                        >
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                                Nombre
                            </label>
                            <input
                                value={name} 
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                                Descripción
                            </label>
                            <input
                                value={description} 
                                type="text"
                                name="description"
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="room"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Habitación
                            </label>
                            <select id="room" name="id_room" onChange={ (e)=> setSelectedRoom(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Selecciona un estado</option>
                                { rooms.map( (room) => (
                                <option value={room.id} key={room.id} >{room.name}</option>
                                ))}  
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="house"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Estado de la reserva
                            </label>
                            <select id="house" name="id_booking_status" onChange={ (e)=> setBookingsStatus(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Selecciona un estado</option>
                                { bookings_status.map( (booking_status) => (
                                <option value={booking_status.id} key={booking_status.id} >{booking_status.name}</option>
                                ))}  
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                                Precio
                            </label>
                            <input
                                value={price} 
                                type="text"
                                name="price"
                                id="price"
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-[#213555] hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Actualizar
                        </button>
                    </form>
				</div>
			</div>
		</div>
	</section>
    </>
    );
};

export default EditBooking;