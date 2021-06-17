import React from 'react';
import Basket from './Basket';
import NavMenu from './NavMenu';
import './Menu.scss';

export default function Menu() {
   return (
      <div className='menu'>
         <NavMenu />
         <Basket />
      </div>

   );
}