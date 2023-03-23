import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailList from "./ItemDetail";
import dataJson from '../data/productos.json';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const prm = new Promise((resolve) => {
        setTimeout(() => {
            resolve(id ? dataJson.filter(item => item.id === parseInt(id)) : dataJson)
        }, 300)
    });

    prm.then((data) => {
      setItem(data)
    })
},[id]);

  return (
    <>
      {item ? (
        <ItemDetailList
          id={item.id}
          title={item.nombre}
          description={item.descripcion}
          price={item.precio}
          pictureUrl={item.imagen}
          stock={item.stock}
          initial={item.inicial}
        />
      ) : (
        <p>El item no existe</p>
      )}
    </>
  );
};

export default ItemDetailContainer;