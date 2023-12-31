function Header() {
    return (
        <>
<header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Mario's Pizzas</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Menú</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Sabores</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQ's</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Acerca</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search" aria-label="Search" control-id="ControlID-1" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Ingreso</button>
          <button type="button" className="btn btn-danger">Registro</button>
        </div>
      </div>
    </div>
  </header>

        </>
      );
}

export default Header;