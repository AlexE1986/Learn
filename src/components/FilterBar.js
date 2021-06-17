import React from 'react';
import { connect } from 'react-redux';

import './FilterBar.scss';

function SortBar({ onSortStore }) {

   const sort = function (event) {
      const button = event.target.closest('button');
      if (!button) return;
      const div = event.target.closest('div');
      div.querySelector('.sort-bar__button_active').classList.remove('sort-bar__button_active');
      event.target.classList.add('sort-bar__button_active');
      onSortStore(button.dataset.type);
   }

   return (
      <div className='sort-bar' onClick={sort}>
         <button data-type='name_up' className='sort-bar__button sort-bar__button_active'>name ↑</button>
         <button data-type='name_down' className='sort-bar__button'>name ↓</button>
         <button data-type='price_up' className='sort-bar__button'>price ↑</button>
         <button data-type='price_down' className='sort-bar__button'>price ↓</button>
      </div>
   );
}

export default connect(
   store => ({}),
   dispatch => ({
      onSortStore: (sortType) => {
         dispatch({ type: 'SORT_GOODS', by: sortType })
      }
   })
)(SortBar);