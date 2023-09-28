import React from "react";
import background from "../assets/img/LaCasinaDeManuela.jpg";
import House1 from "../assets/img/Gijon.jpeg"
import House2 from "../assets/img/gijon/51179160-79a1-4753-9a4e-e0d0530fc870.jpeg"
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
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: "70px" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-gray-100 ">
        <h2 className="text-center text-[#213555] font-semibold text-4xl pt-10">Sobre nosotros</h2>
        <div className="flex flex-wrap items-center   py-20 bg-gray-30 w-full">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-[#213555]">
                Alojamientos
            </h3>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-[#213555]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <a href="/house" className="font-bold text-[#213555] mt-8">Ver Alojamientos</a>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-[#213555] w-full mb-6 shadow-lg rounded-lg ">
              <img alt="..." src={House1} className="w-full align-middle rounded-t-lg"/>
             </div>
          </div>
          <div className="flex flex-wrap items-center mt-10">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-[#213555] w-full mb-6 shadow-lg rounded-lg ">
                <img alt="..." src={House2} className="w-full align-middle rounded-t-lg"/>
              </div>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-[#213555]">Habitaciones</h3>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-[#213555]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. 
              </p>
              <a href="/room" className="font-bold text-[#213555] mt-8">Ver habitaciones</a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-10 pb-20">
        <h2 className="text-center text-[#213555] font-semibold text-4xl mb-12">Actividades</h2>
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap ">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
              <img alt="..." src={Surf} className="w-full align-middle rounded-lg"/>
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold text-[#213555]">Surf</h3>
                <p className="mt-4 text-lg leading-relaxed text-[#213555]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p> 
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4  pt-14">
          <div className="items-center flex flex-wrap"> 
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold text-[#213555]">Senderismo</h3>
                <p className="mt-4 text-lg leading-relaxed text-[#213555]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                  
              </div>
            </div>
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img alt="..."src={Senderismo}className="w-full align-middle rounded-lg"/>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-14">
          <div className="items-center flex flex-wrap ">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4 ">
              <img alt="..." src={Cultura} className="w-full align-middle rounded-lg"/>
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold text-[#213555]">Cultura</h3>
                 <p className="mt-4 text-lg leading-relaxed text-[#213555]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
