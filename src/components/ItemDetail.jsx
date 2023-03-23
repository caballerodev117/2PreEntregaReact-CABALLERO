import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = (count) => {
    setQuantity(count);
  };

  return (
    <div className="col-md-4 mb-4" key={item.id}>
      <div className="card">
        <img
          src={`../img/productos/${item.imagen}`}
          className="card-img-top"
          alt={item.nombre}
        />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.descripcion}</p>
          <p className="card-text font-weight-bold">${item.precio}</p>
        </div>
        <div>
          <ItemCount stock={item.stock} initial={1}></ItemCount>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
