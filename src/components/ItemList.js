import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

export default function ItemList({ store }) {

   const cat = useSelector(state => state.filterCat);

   let catName = <div className='item__category'>{cat.toUpperCase()}</div>;

   if (cat === '') catName = <div className='item__category'>ALL CATEGORIES</div>;

   let itemList = store.map((item) => <Item item={item} key={item.name} />);

   if (store.length === 0) itemList = <div className='item__no-muthes center'>No mutches found</div >

   return (
      <div className='item__list'>
         {catName}
         {itemList}
      </div>

   );
}