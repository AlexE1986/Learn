import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Basket.scss';

export default function Basket() {
   const basket = useSelector(state => state.basket);
   const dispatch = useDispatch();

   const deleteItem = (name) => dispatch({ type: 'DELETE_FROM_BASKET', name: name });

   if (basket.length === 0) {
      return (
         <div className='basket white'>
            <div className='basket__header'>Into basket:</div>
            <div className='basket__empty'>Basket is empty</div>
         </div>
      );
   } else {
      return (
         <div className='basket white'>
            <div className='basket__header'>Into basket:</div>
            {basket.map((item, index) => <div key={item.name}>
               <div className='basket__delete' onClick={() => deleteItem(item.name)}>x</div>
               <div className='basket__item-name'>{index + 1}. {item.name}</div>
               <div className='basket__item-total'>{+item.number} kg x {item.price} ₽/kg = {(item.price * item.number).toFixed(2)} ₽</div>
            </div>)
            }
            <div className='basket__total'>Total price: {(basket.reduce((sum, current) => sum + +(current.price * current.number), 0)).toFixed(2)} ₽</div>
            <div className='basket__clear center' onClick={() => dispatch({ type: 'CLEAR_BASKET' })}>CLEAR</div>
         </div>
      );
   }
}