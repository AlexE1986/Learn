import React from 'react';
import { connect } from 'react-redux';
import './Basket.scss';

function Basket({ basket, onDeleteFromBasket, onClearBasket }) {

   const deleteItem = function (name) {
      onDeleteFromBasket(name);
   }

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
               <div className='basket__item-total'>{+item.number} кг x {item.price} р/кг = {(item.price * item.number).toFixed(2)} р</div>
            </div>)
            }
            <div className='basket__total'>Total price: {(basket.reduce((sum, current) => sum + +(current.price * current.number), 0)).toFixed(2)} p</div>
            <div className='basket__clear center' onClick={() => onClearBasket()}>CLEAR</div>
         </div>
      );
   }

}

export default connect(
   state => ({
      basket: state.basket
   }),
   dispatch => ({
      onDeleteFromBasket: (name) => {
         dispatch({ type: 'DELETE_FROM_BASKET', name: name })
      },
      onClearBasket: () => {
         dispatch({ type: 'CLEAR_BASKET' })
      }
   })
)(Basket)