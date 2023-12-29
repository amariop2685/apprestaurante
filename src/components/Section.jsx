import { useState } from 'react'
import {db} from '../config/database';
import { collection, addDoc } from 'firebase/firestore';

function Section() {


    const[formulario, setFormulario] = useState({
        nombre:"",
        email:"",
        telefono:"",
        comentarios:""
      });

    const handleInputChange = (event) => {
        setFormulario({
          ...formulario,
          [event.target.name]: event.target.value
        });
      }
    
        const reservar = async (event) => {
          event.preventDefault();
          console.log(formulario);
          //mandar formulario
          await addDoc(collection(db, "reservas"), formulario);
        }
      
    return (
        <div className="row">
            <div className="col-md-6" style={{ background: "#f9fafb" }}>
                <br />
                <h3>Reserva con Nosotros</h3>
                <br />
                <p>A partir de tú contacto, nos comunicaremos contigo para verificar las fechas y disponibilidad de horarios.</p>
                <a><img width="25" height="25" src="https://img.icons8.com/sf-ultralight/25/home-page.png" alt="home-page" />Avenida Libertador O'Higgins 1302, Oficina 70, Comuna Santiago</a>
                <br />
                <a><img width="25" height="25" src="https://img.icons8.com/sf-ultralight/25/cell-phone.png" alt="cell-phone" />+(56)9595669686</a>
                <br />
                <a><img width="25" height="25" src="https://img.icons8.com/sf-ultralight/25/new-post.png" alt="new-post" />contacto@pizzas.cl</a>
            </div>
            <div className="col-md-6">


                <form onSubmit={reservar}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="nombre" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="number" className="form-control" name="telefono" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Solicitud</label>
                        <textarea className="form-control" rows={4} name="comentarios" onChange={handleInputChange}></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn btn-danger">Reservar</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Section;     