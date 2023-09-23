import axios from '../../axios/axios';
import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';


function BookingSuccess(){

    const [id_customer, setIdCustomer] = useState('');
    const [name, setName] = useState('');
    const [family_name, setFamilyName] = useState('');
    const [email, setEmail] = useState('');
    


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
    }, []);
  

    return (
        <>
        <div className="block p-10 bg-white border border-gray-200 shadow-xl rounded-lg shadowdark:border-gray-700">
				<h5 className="my-2 text-2xl font-bold tracking-tight text-green-500">
					{name}, su reserva se ha realizado con éxito!
				</h5>
				<p className="font-normal text-gray-700">Gracias por su reserva, en breve de le mandaremos un correo electrónico de confirmación a : {email}</p>
			</div>
        </>
    )
}
export default BookingSuccess;