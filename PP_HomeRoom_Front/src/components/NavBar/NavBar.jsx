import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){

    return(

    <div id="app2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home Room</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/house">INICIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/room">ALOJAMIENTOS</a>
                        </li>
                        <li clasName="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">TARIFAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/admin/customer">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

);   

}
export default  NavBar
