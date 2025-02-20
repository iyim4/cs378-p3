import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 
// This imports bootstrap css styles. You can use bootstrap or your own classes 
// by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. 
// Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [subtotal, setSubtotal] = useState(0);

  return (
    <div>
      <Header title="Japanese Menu" />
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
      <renderSubtotal subtotal={subtotal} />
    </div>
  );
}

function renderSubtotal ({ subtotal }) {
  return (
    <div>
      <div class="row">
        <div class="col-6">
          <p>Subtotal: ${subtotal}</p>
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-primary btn-sm">Order</button>
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-primary btn-sm">Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
