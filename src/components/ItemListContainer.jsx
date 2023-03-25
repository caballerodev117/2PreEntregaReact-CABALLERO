import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import dataJson from '../data/productos.json';

function ItemListContainer({greeting}) {
  const [productos, setProductos] = useState([]);
  const {id} = useParams ();

  useEffect(() => {
      const prm = new Promise((resolve) => {
          setTimeout(() => {
              resolve(id ? dataJson.filter(item => item.categoria === id) : dataJson)
          }, 300)
      });

      prm.then((data) => {
        setProductos(data)
      })
  },[id]);
  
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{greeting}</h1>
        <hr className="my-4" />
        <p className="lead">Aquí podrás encontrar la mejor variedad de productos orgánicos.</p>
      </div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;

