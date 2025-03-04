import "../App.css"
function CartWidget() {
  return (
    <div>
      <button type="button" className="btn btn-outline-primary position-relative">
        🛒
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          ¡Felicitaciones! estás haciendo un gran trabajo. ¡Sigue así!
        </span>
      </button>
    </div>
  )
}

export default CartWidget


