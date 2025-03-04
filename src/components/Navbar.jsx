import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">LuxStore</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Ropa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Calzado</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Accesorios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ofertas</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default Navbar


