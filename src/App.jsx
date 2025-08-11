/* eslint-disable jsx-a11y/accessible-emoji */
import { useState } from 'react';
import './App.scss';
import MainTable from './components/MainTable';
import Navbar from './components/Navbar';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { mergeDataFromServer } from './utils/mergeDataFromServer';
import { filteredData } from './utils/dataHelpers';

const mergedData = mergeDataFromServer(
  usersFromServer,
  categoriesFromServer,
  productsFromServer,
);

export const App = () => {
  const [data] = useState(mergedData);
  const [sortCategory, setSortCategory] = useState('');
  const [sortByUser, setSortByUser] = useState('');
  const [searchQuery, setSearcQuery] = useState('');

  const renderedData = filteredData(
    data,
    sortCategory,
    searchQuery,
    sortByUser,
  );

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>
        <Navbar
          searchQuery={searchQuery}
          setSearcQuery={setSearcQuery}
          sortCategory={sortCategory}
          setSortCategory={setSortCategory}
          setSortByUser={setSortByUser}
        />
        <MainTable renderedData={renderedData} />
      </div>
    </div>
  );
};
