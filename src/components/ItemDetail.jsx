import ItemCount from "./ItemCount";
import Item from "./Item";

const ItemDetail = ({item}) => {
 
  return (
    <div className="col-md-4 mb-4" key={item.id}>
      <div className="card">
        <div>
          <Item key={item.id} producto={item}></Item>
        </div>
        <div>
          <ItemCount stock={item.stock} initial={1}></ItemCount>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
