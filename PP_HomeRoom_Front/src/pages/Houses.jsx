import React, {useEffect, useState} from 'react';
import axios from '../axios/axios';
import {Link} from 'react-router-dom';
import Img1 from "../assets/img/LaCasinaDeManuela.jpg";
import background from '../assets/img/sMartin/43bbcdf1-c5c3-4ce3-a9ce-3b4dd83d79cc.jpeg'

function Houses(){

  const [houses, setHouses] = useState([]);

  useEffect ( ()=> {
      getAllHouses();
  }, []);

  const getAllHouses = async () => {
      const response = await axios.get('admin/house');
      setHouses(response.data);
  };
    return (

    <>
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
          <div className="container relative mx-auto max-w-sm">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-gray-200 font-semibold text-5xl">
                      Alojamientos
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


        <div className="flex flex-nowrap  py-20 bg-gray-30 w-full">
        { houses.map( (house) => (
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto border border-gray-200 rounded-lg shadow bg-gray-200">
                <div className=" flex flex-col min-w-0 break-words bg-[#213555] w-full">
                  <img
                    alt="..."
                    src={Img1}
                    className="w-full align-middle rounded-lg"
                  />

                </div>
                <div className="w-full flex-col justify-start md:w-full px-4 mr-auto ml-aut bg-gray-200 py-6">
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">{house.city}</p>
                  <h3 className="text-3xl mb-2 w-full font-semibold leading-normal">{house.name}</h3>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">{house.description}</p>
                  <a href="/room" className="font-bold text-gray-800 mt-8">Ver Habitaciones</a>
                </div>
              </div>
          ))}
        </div>

    </section> 
    </>
      
    )
}
export default Houses;

        