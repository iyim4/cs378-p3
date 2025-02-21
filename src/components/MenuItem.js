import React from 'react';

// This is a functional component that represents a single menu item. 
// it renders the name, description, image, and price
const MenuItem = ({ item, itemCounts, setItemCounts, subtotal, setSubtotal }) => {
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
                <button onClick={() => removeItem(item, itemCounts, setItemCounts, subtotal, setSubtotal)}> remove </button> 
                {/* <button> <BsDashCircle /> </button>  */}
              </div>
              <div class="col-4">
                <p>{itemCounts[item.id]}</p> 
              </div>
              <div class="col-4">
                {/* <BsPlusCircle />  */}
                <button onClick={() => addItem(item, itemCounts, setItemCounts, subtotal, setSubtotal)}> add </button> 
                {/* <button> <BsPlusCircle /> </button>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function addItem(item, itemCounts, setItemCounts, subtotal, setSubtotal) {
  const nextCounts = itemCounts.map((c, i) => {
    if (i === item.id) {
      // Increment the clicked counter
      return c + 1;
    } else {
      // The rest haven't changed
      return c;
    }
  });
  setItemCounts(nextCounts);
  setSubtotal(subtotal + (Math.floor(item.price * 100) / 100));
}

function removeItem(item, itemCounts, setItemCounts, subtotal, setSubtotal) {
  if (itemCounts[item.id] !== 0) {
    const nextCounts = itemCounts.map((c, i) => {
      if (i === item.id) {
        // Increment the clicked counter
        return c - 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setItemCounts(nextCounts);
    // let newSubtotal = ((subtotal - item.price) * 100); // tuncate to 2 decimal places
    // newSubtotal /= 100;
    // setSubtotal(Math.floor(newSubtotal));
    // let newSubtotal = (Math.floor((subtotal - item.price) * 100)) / 100;
    let newSubtotal = subtotal - (Math.floor(item.price * 100) / 100);
    if (newSubtotal < 0) {
      newSubtotal = 0;
    }
    setSubtotal(newSubtotal);
  }
}

export default MenuItem;
