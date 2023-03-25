import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import dataJson from '../data/productos.json';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const prm = new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataJson.find(item => item.id === parseInt(id)))
        }, 300);
    });

    prm.then((data) => {
      setItem(data)
      console.log(item); 
    })
},[id]);

  return (
    <div className="container">
      {item ? (
        <ItemDetail item={item}/>
        ) : (
          <p>El item no existe</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;