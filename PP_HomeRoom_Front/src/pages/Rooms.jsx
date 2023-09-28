import React, {useEffect, useState} from 'react';
import axios from '../axios/axios';
import Img1 from '../assets/img/sMartin/0ad0caef-5dcc-4468-8559-f06dcad1d51b.webp'
import background from '../assets/img/sMartin/683eb956-a958-4c36-bd49-7c086e6c1054.webp'

function Rooms(){

    const [rooms, setRooms] = useState([]);

    useEffect ( ()=> {
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

    return (

    <section className="bg-gray-100">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh"
          }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${background})`
            }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="container relative center mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-gray-200 font-semibold text-5xl">
                    Habitaciones
                  </h1>
                </div>
              </div>

            </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <div className="flex justify-items-center px-8 pb-24 pt-14  bg-gray-100 w-full ">
        { rooms.map((room) => (
        <div class="max-w-sm mx-4 bg-gray-100  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={Img1} alt="" />
            </a>
            <div className="p-5 m-5">
                <a href="#">
                    <p class="mb-2 text-l font-bold tracking-tight text-gray-500 dark:text-white">{room.house.name}</p>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{room.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{room.description}</p>
                <a href="/booking" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#213555] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Reserva ya!
                </a>
            </div>
        </div>
        )
        )}   
      </div>
    </section>

    )
}
export default Rooms;