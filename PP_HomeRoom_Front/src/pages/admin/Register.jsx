import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios/axios';
import { useAuth } from '../../contexts/AuthContext';

export default function Register() {
	const { setUser } = useAuth();
	const [nameError, setNameError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
	// register user
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, password, cpassword } = e.target.elements;
		const body = {
			name: name.value,
			email: email.value,
			password: password.value,
			password_confirmation: cpassword.value,
		};
		try {
			const resp = await axios.post('/register', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				return <Navigate to="/profile" />;
			}
		} catch (error) {
			if (error.response.status === 422) {
				console.log(error.response.data.errors);
				if (error.response.data.errors.name) {
					setNameError(error.response.data.errors.name[0]);
				} else {
					setNameError('');
				}
				if (error.response.data.errors.email) {
					setEmailError(error.response.data.errors.email[0]);
				} else {
					setEmailError('');
				}
				if (error.response.data.errors.password) {
					setPasswordError(error.response.data.errors.password[0]);
				} else {
					setPasswordError('');
				}
			}
		}
	};

	return (
	<>
	<section className="flex bg-gray-100 w-full">
        <button type="button" className="absolute my-8 mx-14 text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/'}>Volver</Link></button>
		<div className="flex flex-col w-full mb-8 items-center  py-8 mx-auto md:h-4/5 lg:py-8">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="p-2 space-y-2 md:space-y-6 sm:p-8">
                    <h1 className="text-sm font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
                        Datos de contacto
                    </h1>
                    <form className="space-y-4 md:space-y-6" method="post" onSubmit={handleSubmit}>
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
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p- dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
								{nameError && (
									<p className="text-sm text-red-600">{nameError}</p>
								)}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-1 text-sm font-medium text-[#213555] dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
							{emailError && (
									<p className="text-sm text-red-600">{emailError}</p>
								)}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-1 text-sm font-medium text-[#213555] dark:text-white">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
							{passwordError && (
									<p className="text-sm text-red-600">{passwordError}</p>
								)}
                        </div>
						<div>
                            <label
                                htmlFor="cpassword"
                                className="block mb-1 text-sm font-medium text-[#213555] dark:text-white">
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                className="bg-gray-50 border border-gray-300 text-[#213555] sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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



		
	
		</>
	);
}
