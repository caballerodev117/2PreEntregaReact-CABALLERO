import Item from "./Item";
import Row from 'react-bootstrap/Row';

function ItemList({ productos }) {
  return (
    <Row xs={1} md={4} className="g-4">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} ></Item>
      ))}
    </Row>
  );
}

export default ItemList;
