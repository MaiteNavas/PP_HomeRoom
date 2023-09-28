import axios from '../../../axios/axios';
import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CreateHouse(){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post('admin/house', {name: name, description: description, city: city});
        navigate('/admin/house');
    };

    return (

    <section className=" bg-gray-100 dark:bg-gray-900 mx-full">
        <button type="button" class="absolute my-8 mx-14 text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/admin/house'}>Volver</Link></button>
        <div className="flex flex-col w-4/5 items-center  py-8 mx-auto md:h-screen lg:py-8">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
                        Crear alojamiento
                    </h1>
                    <form className="space-y-4 md:space-y-6" method="post"onSubmit={store}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-1 text-sm font-medium text-[#213555] dark:text-white">
                                Nombre
                            </label>
                            <input
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
                                className="block mb-1 text-sm font-medium text-[#213555] dark:text-white">
                                Descripción
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="city"
                                className="block mb-1 text-sm font-medium text-[#213555] dark:text-white">
                                Ciudad
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={ (e)=> setCity(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-[#213555] hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Enviar
                        </button>
                    </form>
				</div>
			</div>
		</div>
	</section>
    );
};

export default CreateHouse;