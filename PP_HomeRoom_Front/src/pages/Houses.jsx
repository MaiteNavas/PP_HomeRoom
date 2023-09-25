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
          <div className="container relative mx-auto">
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
        <div className="width-4/5 mx-8 my-24 py-10 flex justify-center bg-gray-100 ">
      { houses.map( (house) => (

      <a href="/room" class="flex m-8 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Img1} alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{house.city}</p>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{house.name}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{house.description}</p>
        </div>
      </a>
       ))}
       </div>
    </section> 
    </>
      
    )
}
export default Houses;

        