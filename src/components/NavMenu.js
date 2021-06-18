import React from 'react';
import { connect } from 'react-redux';
import './NavMenu.scss';

function NavMenu({ store, onFilterCategory }) {
   const categories = new Set();

   store.forEach((item) => {
      categories.add(item.category);
   });

   const cat = Array.from(categories).sort();

   return (
      <div className='nav-menu white'>
         <div className='nav-menu__header'>CATEGORIES</div>
         <div className='nav-menu__item' key='all' onClick={() => onFilterCategory('')}>SHOW ALL</div>
         {cat.map((item, index) => <div className='nav-menu__item' key={index} onClick={() => onFilterCategory(item)} >• {item.toUpperCase()}</div>)
         }
         <div className='nav-menu__footer'></div>
      </div >
   );
}

export default connect(
   store => ({
      store: store.storage
   }),
   dispatch => ({
      onFilterCategory: (cat) => {
         dispatch({ type: 'FILTER_CAT', cat: cat })
      }
   })
)(NavMenu)
