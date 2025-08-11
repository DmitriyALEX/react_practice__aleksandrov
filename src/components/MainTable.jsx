import React from 'react';
import cn from 'classNames';
import { tableHeaders } from '../utils/constans';
import { sex } from '../utils/constans';

const MainTable = ({ renderedData }) => {
  console.log(renderedData);

  return (
    <div className="box table-container">
      <p data-cy="NoMatchingMessage">No products matching selected criteria</p>

      <table
        data-cy="ProductTable"
        className="table is-striped is-narrow is-fullwidth"
      >
        <thead>
          <tr>
            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                {tableHeaders.TABLE_HEADER_ID}
                <a href="#/">
                  <span className="icon">
                    <i data-cy="SortIcon" className="fas fa-sort" />
                  </span>
                </a>
              </span>
            </th>

            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                {tableHeaders.TABLE_HEADER_PRODUCT}
                <a href="#/">
                  <span className="icon">
                    <i data-cy="SortIcon" className="fas fa-sort-down" />
                  </span>
                </a>
              </span>
            </th>

            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                {tableHeaders.TABLE_HEADER_CATEGORY}
                <a href="#/">
                  <span className="icon">
                    <i data-cy="SortIcon" className="fas fa-sort-up" />
                  </span>
                </a>
              </span>
            </th>

            <th>
              <span className="is-flex is-flex-wrap-nowrap">
                {tableHeaders.TABLE_HEADER_USER}
                <a href="#/">
                  <span className="icon">
                    <i data-cy="SortIcon" className="fas fa-sort" />
                  </span>
                </a>
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {renderedData.map(tableItem => (
            <tr data-cy="Product">
              <td className="has-text-weight-bold" data-cy="ProductId">
                {tableItem.id}
              </td>
              <td data-cy="ProductName">{tableItem.name}</td>

              <td data-cy="ProductCategory">
                {tableItem.category.icon} - {tableItem.category.title}
              </td>
              <td data-cy="ProductUser" className="has-text-link">
                {tableItem.owner.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
