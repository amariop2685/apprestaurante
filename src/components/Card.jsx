function Card() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/pizza_Mh3H4eanyBKEsStv1YclPWTf9OUqIi-1024x683.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pizza Aceituna</h5>
                            <p className="card-text">Base tomates, Queso Mozarella, y aceitunas verdes </p>
                            <a href="#" className="btn btn-danger">Pedir</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pizza Nona</h5>
                            <p className="card-text">base tomates, Queso Mozarella, Aceitunas negras, Salami, Albaca</p>
                            <a href="#" className="btn btn-danger">Pedir</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://selecciones.com.mx/wp-content/uploads/2022/02/recetas-de-pizzas-amigables-con-el-planeta.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pizza Margarita</h5>
                            <p className="card-text">Base tomates, Queso Mozarella, Tomates y Albaca.</p>
                            <a href="#" className="btn btn-danger">Pedir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;