import axios from '../../../axios/axios';
import React,{useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';


function EditCustomer(){

    const [name, setName] = useState('');
    const [family_name, setFamilyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`admin/customer/${id}`, {name: name, family_name: family_name, email: email, phone: phone, address: address
        });
        navigate('/admin/customer');
    }

    useEffect( () =>{
        const getCustomerById = async () => {
            const response = await axios.get(`admin/customer/${id}`);
            setName(response.data.name);
            setFamilyName(response.data.family_name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setAddress(response.data.address);
        }
        getCustomerById();
        
    }, []);

    return (
    <>

<section className=" bg-gray-100 dark:bg-gray-900 mx-auto">
		<div className="flex flex-col w-4/5 items-center  py-8 mx-auto md:h-screen lg:py-8">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <button type="button" className="text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/admin/room'}>Volver</Link></button>
                    <h1 className="text-xl font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
                        Editar cliente: {name} {family_name}
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
                                htmlFor="family_name"
                                className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                                Apellidos
                            </label>
                            <input
                                value={family_name} 
                                type="text"
                                name="family_name"
                                id="family_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setFamilyName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                                Email
                            </label>
                            <input
                                value={email} 
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                                Teléfono
                            </label>
                            <input
                                value={phone} 
                                type="text"
                                name="phone"
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-[#213555] dark:text-white">
                                Dirección
                            </label>
                            <input
                                value={address} 
                                type="text"
                                name="address"
                                id="address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setAddress(e.target.value)}
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

export default EditCustomer;