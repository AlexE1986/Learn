import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.scss';

export default function SearchBar({ onSearch }) {
   const input = useRef('');
   const dispatch = useDispatch();

   let clearBtn;

   const search = function () {
      clearBtn = document.querySelector('[id="clear"]');
      dispatch({ type: 'SEARCH', payload: input.current.value });
      clearBtn.classList.remove('hidden');
      if (input.current.value === '') clearBtn.classList.add('hidden');
   }

   const clear = function () {
      clearBtn = document.querySelector('[id="clear"]');
      input.current.value = '';
      dispatch({ type: 'SEARCH', payload: '' });
      clearBtn.classList.add('hidden');
   }

   return (
      <div className='search-bar'>
         <input type='search' className='search-bar__input' ref={input} placeholder='найти...' onInput={() => setTimeout(search, 500)} autoComplete='off'></input>
         <i className="fa fa-search search-bar__icon" />
         <button className='search-bar__clear hidden' id='clear' onClick={clear}>X</button>
      </div>
   );
}