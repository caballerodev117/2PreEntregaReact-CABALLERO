function Item({ producto }) {
    return (
      <div className="card h-100">
        <img className="card-img-top" src={producto.imagen} alt={producto.nombre} />
        <div className="card-body">
          <h4 className="card-title">{producto.nombre}</h4>
          <p className="card-text">{producto.descripcion}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">${producto.precio}</small>
        </div>
      </div>
    );
  }
  
  export default Item;