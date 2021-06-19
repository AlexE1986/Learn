import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Item.scss';

export default function Item({ item }) {

   const [count, setCount] = useState(0);
   const dispatch = useDispatch();

   const srcImg = item.name.split(' ').join('_');

   const addToBasket = function () {
      if (count > 0) {
         dispatch({ type: 'ADD_TO_BASKET', good: { ...item, number: +count } });
         setCount(0);
      }
   }

   const plus = function () {
      if (count < 10) setCount(count + 0.5);
   }

   const minus = function () {
      if (count > 0) setCount(count - 0.5);
   }

   const input = function (e) {
      const input = e.target.parentNode.lastChild;
      input.classList.remove('hidden');
      input.focus();
      let inputCount = 0;

      input.oninput = function () {
         inputCount = +input.value;
         inputCount = (inputCount > 10) ? 10 : inputCount;
         inputCount = (inputCount < 0) ? 0 : inputCount;
      }

      input.onkeydown = function (e) {
         if (e.key === 'Enter') input.blur();
      }

      input.onblur = function () {
         if (inputCount !== 0 && !isNaN(inputCount)) { setCount(inputCount.toFixed(2)) }

         input.value = '';
         input.classList.add('hidden');
      }
   }

   return (
      <div className='item'>
         <div className='item__name center white'>{item.name}</div>
         <img src={`/img/${item.category}/${srcImg}.jpg`} className='item__image' alt='' />
         <div className='item__buttons center white'>
            <div className='item__text'>less 10 kg</div>
            <div className='item__button' onClick={minus}>-</div>
            <div className='item__count' onClick={input}>{count}</div>
            <div className='item__button' onClick={plus}>+</div>
            <input className='item__input-count hidden'></input>
         </div>
         <div className='item__price white'>{item.price.toFixed(2)}</div>
         <div className='item__basket center white' onClick={addToBasket}>TO BASKET</div>
      </div>);
}