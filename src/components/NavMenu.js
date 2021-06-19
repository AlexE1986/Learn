import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './NavMenu.scss';

export default function NavMenu() {
   const categories = new Set();
   const store = useSelector(state => state.storage);
   const dispatch = useDispatch();

   store.forEach((item) => {
      categories.add(item.category);
   });

   const cat = Array.from(categories).sort();

   return (
      <div className='nav-menu white'>
         <div className='nav-menu__header'>CATEGORIES</div>
         <div className='nav-menu__item' key='all' onClick={() => dispatch({ type: 'FILTER_CAT', cat: '' })}>SHOW ALL</div>
         {cat.map((item, index) => <div className='nav-menu__item' key={index} onClick={() => dispatch({ type: 'FILTER_CAT', cat: item })} >• {item.toUpperCase()}</div>)
         }
         <div className='nav-menu__footer'></div>
      </div >
   );
}