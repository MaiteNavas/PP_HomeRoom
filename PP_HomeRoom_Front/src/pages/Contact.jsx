import {Link } from 'react-router-dom';


function Contact(){


    return(
        <>
        <section className="flex bg-gray-100 w-full">
		<button type="button" className="absolute my-8 mx-14 text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/'}>Volver</Link></button>

			<div className="flex flex-col w-full mb-8 items-center  py-8 mx-auto md:h-4/5 lg:py-8">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-semi-bold leading-tight tracking-tight text-[#213555] md:text-2xl dark:text-white">
							Contacta con nosotros
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							action="#"
							method="post"
							>
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
									
									required
								/>

							</div>
							<div>
								<label
									htmlFor="email"
									className="block mb-1 text-sm font-medium text-[#213555] dark:text-white">
									Correo electrónico
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									
									required
								/>

							</div>
                            <div>
								<label
									htmlFor="cpassword"
									className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
									Teléfono
								</label>
								<input
									type="text"
									name="cpassword"
									id="cpassword"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-1 text-sm font-medium text-[#213555] dark:text-white">
									Comentario
								</label>
								<textarea
									type="text"
									name="password"
									id="password"
									placeholder="Escribe tu comertario..."
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#213555] focus:border-[#213555] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </>
    )
}
export default Contact