import React from 'react';
import SearchBar from './SearchBar';
import SortBar from './FilterBar';

import './TopMenu.scss';

export default function TopMenu() {
   return (
      <div className='top-menu'>
         <SortBar />
         <SearchBar />
      </div>

   );
}
