import React from 'react';
import { useState } from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

function subtotal = () => {
  const [subtotal, setSubtotal] = useState(0);
  
}

// 
function addPrice (price) => {
  subtotal += price;
}

// This is a functional component that represents a single menu item. 
// it renders the name, description, image, and price
const MenuItem = ({ item }) => {
  return (
    <div class="container-fluid row text-center entry">
      <div class="col-4">
        <img src={"./images/"+item.imageName} alt={"An image of "+item.title} class="img-fluid rounded float-left"/>
      </div>
      <div class="col-8">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div class="row">
          <div class="col-6">
            <p>${item.price}</p>
          </div>
          <div class="col-6">
            {/* price */}
            <div class="row">
              <div class="col-4">
                {/* q? how to pass in price variable? */}
                <button onClick={addPrice price=item.price}> <BsPlusCircle /> </button> 
              </div>
              <div class="col-4">
                {/* <p>count</p>  q?*/}
              </div>
              <div class="col-4">
                <button onClick={addPrice }> <BsDashCircle /> </button> 
              </div>
            </div>
            {/* <button type="button" class="btn btn-primary btn-sm">Add</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
