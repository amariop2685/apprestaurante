
import { useState } from 'react'
import {db} from '../config/database';
import { collection, addDoc } from 'firebase/firestore';


function footer({titulo=""}) {

const [newsletter, setNewsletter] = useState({
  emailnoticias:""
});

const handleInputChange = (event) => {
  setNewsletter({
    ...newsletter,
    [event.target.name]: event.target.value
  });
}

const suscribete = async (event) => {
  event.preventDefault();
  await addDoc(collection(db, "noticias"), newsletter);
}


    return ( 
        <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Menú</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pizza Aceituna</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pizza Nonna</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pizza Margarita</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pizza Vegetariana</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pizza Toda Carne</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Sabores</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Quesos</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Salsas</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Vegetales</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Carnes</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Masas</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Acerca</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Quienes Somos</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nuestras Sedes</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Selección</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Socios</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Inversión</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form onSubmit={suscribete}>
          <h5>{titulo}</h5>
          <p>Resumen mensual de nuestras sabores y novedades.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label className="visually-hidden">Email address</label>
            <input type="email" className="form-control" name="emailnoticias" onChange={handleInputChange} placeholder="Email"/>
            <button className="btn btn-danger">Suscribete</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 DeLorean, EIRL. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
    );
}

export default footer;