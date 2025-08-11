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
  const [data, setData] = useState(mergedData);
  const [sortType, setSortType] = useState('');
  const [searchQuery, setSearcQuery] = useState('');

  const renderedData = filteredData(data, sortType, searchQuery);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>
        <Navbar searchQuery={searchQuery} setSearcQuery={setSearcQuery} />
        <MainTable renderedData={renderedData} />
      </div>
    </div>
  );
};
