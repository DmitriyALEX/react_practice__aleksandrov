import React, { useState } from 'react';
import cn from 'classnames';
import { categories } from '../utils/constans';
// import { mergeDataFromServer } from '../utils/mergeDataFromServer';

const Navbar = ({ searchQuery, setSearcQuery, setSortCategory }) => {
  const [categoryItem, setCategoryItem] = useState('');
  const categoryProductButtons = [
    { id: 1, label: categories.CATEGORY_GROCERY },
    { id: 2, label: categories.CATEGORY_DRINKS },
    { id: 3, label: categories.CATEGORY_FRUITS },
    { id: 4, label: categories.CATEGORY_ELECTRONICS },
    { id: 5, label: categories.CATEGORY_CLOTHES },
  ];

  // const users = mergeDataFromServer.map(user => {
  //   return user.name;
  // });

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <p className="panel-tabs has-text-weight-bold">
          <a data-cy="FilterAllUsers" href="#/">
            All
          </a>

          <a data-cy="FilterUser" href="#/">
            User 1
          </a>

          <a data-cy="FilterUser" href="#/" className="is-active">
            User 2
          </a>

          <a data-cy="FilterUser" href="#/">
            User 3
          </a>
        </p>

        <div className="panel-block">
          <p className="control has-icons-left has-icons-right">
            <input
              data-cy="SearchField"
              type="text"
              className="input"
              placeholder="Search"
              value={searchQuery}
              onChange={event => setSearcQuery(event.target.value)}
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>

            <span className="icon is-right">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button data-cy="ClearButton" type="button" className="delete" />
            </span>
          </p>
        </div>

        <div className="panel-block is-flex-wrap-wrap">
          <a
            href="#/"
            data-cy="AllCategories"
            className="button is-success mr-6 is-outlined"
            onClick={() => {
              setSortCategory(categories.CATEGORY_ALL);
              setCategoryItem(categories.CATEGORY_ALL);
            }}
          >
            All
          </a>
          {categoryProductButtons.map(category => {
            const isActive = categoryItem === category.label;

            return (
              <a
                key={category.label}
                data-cy="Category"
                className={cn('button mr-2 my-1', { 'is-info': isActive })}
                href="#/"
                onClick={() => {
                  setSortCategory(category.label);
                  setCategoryItem(category.label);
                }}
              >
                {category.label}
              </a>
            );
          })}
        </div>

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
