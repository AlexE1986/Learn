import React, { useRef } from 'react';
import { connect } from 'react-redux';
import './SearchBar.scss';

function SearchBar({ onSearch }) {
   const input = useRef('');
   let clearBtn;

   const search = function () {
      clearBtn = document.querySelector('[id="clear"]');
      console.log(clearBtn);

      onSearch(input.current.value);
      clearBtn.classList.remove('hidden');
      if (input.current.value === '') clearBtn.classList.add('hidden');
   }

   const clear = function () {
      onSearch('');
      input.current.value = '';
      clearBtn.classList.add('hidden');
   }

   return (
      <div className='search-bar'>
         <input className='search-bar__input' ref={input} placeholder='найти...' onInput={() => setTimeout(search, 500)}></input>
         <i className="fa fa-search search-bar__icon" />
         <button className='search-bar__clear hidden' id='clear' onClick={clear}>X</button>
      </div>
   );
}

export default connect(
   state => ({}),
   dispatch => ({
      onSearch: (value) => {
         dispatch({ type: 'SEARCH', payload: value })
      }
   })
)(SearchBar)
