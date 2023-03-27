import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import Col from 'react-bootstrap/Col';


function Item({ producto }) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={`../img/productos/${producto.imagen}`}>
          </Card.Img>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/item/${producto.id}`}>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} beat />
            ${producto.precio}
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default Item;