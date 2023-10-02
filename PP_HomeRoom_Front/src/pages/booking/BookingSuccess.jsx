import axios from '../../axios/axios';
import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';


function BookingSuccess(){

    const [id_customer, setIdCustomer] = useState('');
    const [name, setName] = useState('');
    const [family_name, setFamilyName] = useState('');
    const [email, setEmail] = useState('');
    const [id_room, setIdRoom] = useState('');
    const [checkin_date, setCheckinDate] = useState('');
    const [checkout_date, setCheckoutDate] = useState('');
    const [nights, setNights] = useState('');
    const [total_adults, setTotalAdults] = useState('');
    const [total_children, setTotalChildren] = useState('');
    const [room_name, setRoomName] = useState('');

    const {id} = useParams();
    useEffect( () =>{
        const getCustomerById = async () => {
            const response = await axios.get(`admin/customer/${id}`);
            setIdCustomer(response.data.id);
            setName(response.data.name);
            setFamilyName(response.data.family_name);
            setEmail(response.data.email);
        };
        getCustomerById();    
    }, [id]);

    const {idBooking} = useParams();
    useEffect( () =>{
        const getBookingById = async () => {
            const response = await axios.get(`admin/booking/${idBooking}`);
            setIdRoom(response.data.id_room);
            setCheckinDate(response.data.checkin_date);
            setCheckoutDate(response.data.checkout_date);
            setNights(response.data.nights);
            setTotalAdults(response.data.total_adults);
            setTotalChildren(response.data.total_children);

        const roomResponse = await axios.get(`admin/room/${response.data.id_room}`);
        setRoomName(roomResponse.data.name); // Asignar el nombre de la habitación al estado
    };
        getBookingById();    
    }, [idBooking]);
  

    return (
        <>
        <div className="block p-10 bg-white border border-gray-200 shadow-xl rounded-lg shadowdark:border-[#213555]">
				<p className="my-2 text-xl font-bold tracking-tight text-green-500">
					{name}, su reserva se ha realizado con éxito!
				</p>
				<p className="font-normal text-[#213555]">Gracias por su reserva, en breve de le enviaremos un correo electrónico de confirmación a : {email}</p>
		</div>
        <div className="block p-10 bg-white border border-gray-200 shadow-xl rounded-lg shadowdark:border-[#213555]">
				<h5 className="my-2 text-2xl font-bold tracking-tight text-[#213555]">
					Detalles de la reserva:
				</h5>
				<p className="font-normal text-[#213555]">Habitación : {room_name}</p>
                <p className="font-normal text-[#213555]">Fecha de entrada : {checkin_date}</p>
                <p className="font-normal text-[#213555]">Fecha de salida : {checkout_date}</p>
                <p className="font-normal text-[#213555]">Total Noches : {nights}</p>
                <p className="font-normal text-[#213555]">Adultos : {total_adults}</p>
                <p className="font-normal text-[#213555]">Niños : {total_children}</p>
		</div>
        </>
    )
}
export default BookingSuccess;