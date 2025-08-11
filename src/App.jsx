/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './App.scss';
import MainTable from './components/MainTable';
import Navbar from './components/Navbar';

// import usersFromServer from './api/users';
// import categoriesFromServer from './api/categories';
// import productsFromServer from './api/products';

// const products = productsFromServer.map(product => {
//   const category = categoriesFromServer.find(
//     categories => categories.id === product.categoryId,
//   );
//   // find by product.categoryId
//   const user = usersFromServer.find(
//     userServer => userServer.id === category.ownerId,
//   );
//   // find by category.ownerId

//   return null;
// });

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Product Categories</h1>
      <Navbar />
      <MainTable />
    </div>
  </div>
);
