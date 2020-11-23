import React from "react";
import InfoProduct from './InfoProduct';
import { Link } from 'react-router-dom';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function togglePopup(){
  document.getElementsByClassName("popup").classList.toggle("active");
}

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img className="product__img" src={image} alt="" />
        
      <button onClick={addToBasket}>Add to Basket</button>
      <Link to='/ExtraInfo'>
        <button>Learn More</button>
      </Link>
    </div>
  );
}

export default Product;