import ItemDetail from "./ItemDetail";

function ItemList({ productos }) {
  return (
    <div className="row">
      {productos.map((producto) => (
        <ItemDetail key={producto.id} item={producto} ></ItemDetail>
      ))}
    </div>
  );
}

export default ItemList;  
