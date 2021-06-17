import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Item.scss';

function Item({ item, onAddToBasket }) {

   const [count, setCount] = useState(0);

   const srcImg = item.name.split(' ').join('_');

   const addToBasket = function () {
      if (count > 0) {
         onAddToBasket({ ...item, number: count });
         setCount(0);
      }
   }

   const plus = function () {
      if (count < 10) setCount(count + 0.5);
   }

   const minus = function () {
      if (count > 0) setCount(count - 0.5);
   }

   const newCount = (count < 10 && count !== 0) ? count.toFixed(1) : count;

   return (
      <div className='item'>
         <div className='item__name center white'>{item.name}</div>
         <img src={`/img/${item.category}/${srcImg}.jpg`} className='item__image' alt='' />
         <div className='item__buttons center white'>
            <div className='item__button' onClick={minus}>-</div>
            <div>{newCount}</div>
            <div className='item__button' onClick={plus}>+</div>
         </div>
         <div className='item__price white'>{item.price.toFixed(2)}</div>
         <div className='item__basket center white' onClick={addToBasket}>TO BASKET</div>
      </div>);
}

export default connect(
   state => ({}),
   dispatch => ({
      onAddToBasket: (good) => {
         dispatch({ type: 'ADD_TO_BASKET', good })
      }
   }))(Item)