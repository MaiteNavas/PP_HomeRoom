import React from "react";

import background from "../assets/img/LaCasinaDeManuela.jpg";
import House1 from "../assets/img/Gijon.jpeg"
import House2 from "../assets/img/Raices.jpg"
import Surf from "../assets/img/actividades/Surf.jpg"
import Senderismo from "../assets/img/actividades/Senderismo.jpg"
import Cultura from "../assets/img/actividades/Niemeyer.jpeg"

export default function Home() {
  return (
    <>
      <main>
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
                      Home Room
                    </h1>
                    <p className="mt-4 text-lg text-gray-200">
                      Disfruta de unas vaciones diferentes. Ofrecemos alquileres de habitaciones por dias, semanas o meses.
                    </p>
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

          <section className="pb-20 bg-gray-100 ">

            <div className="flex flex-wrap items-center   py-20 bg-gray-30 w-full">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Alojamientos
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Nuestros alojamientos están equipados completamente para que no falta de nada
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you're good to go. Just make sure you enable them first via
                  HASTA AQUI CARD 1
                </p>
                <a
                  href="/alojamientos"
                  className="font-bold text-gray-800 mt-8"
                >
                  Ver Alojamientos
                </a>
              </div>

              

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                  <img
                    alt="..."
                    src={House1}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-black">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-black">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happenssss.
                    </p>
                  </blockquote>
                </div>
              </div>


              <div className="flex flex-wrap items-center mt-10">
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                <img
                    alt="..."
                    src={House2}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-black">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-black">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Habitaciones
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Nuestros alojamientos están equipados completamente para que no falta de nada
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you're good to go. Just make sure you enable them first via
                  JavaScriptCARD 2.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Ver habitaciones
                </a>
              </div>
            </div>
          </div>
          
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap ">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
              <img
                    alt="..."
                    src={Surf}
                    className="w-full align-middle rounded-lg"
                  />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">

                  <h3 className="text-3xl font-semibold">
                    Surf
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4  pt-14">
            <div className="items-center flex flex-wrap">
              
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">

                  <h3 className="text-3xl font-semibold">
                    Senderismo
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  
                </div>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                    alt="..."
                    src={Senderismo}
                    className="w-full align-middle rounded-lg"
                  />
              </div>
            </div>
          </div>


          <div className="container mx-auto px-4 pt-14">
            <div className="items-center flex flex-wrap ">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
              <img
                    alt="..."
                    src={Cultura}
                    className="w-full align-middle rounded-lg"
                  />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">

                  <h3 className="text-3xl font-semibold">
                    Cultura
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>


        

        
      </main>
    </>
  );
}