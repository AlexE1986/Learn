import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header';
import ItemList from './components/ItemList';
import Menu from './components/Menu';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { GetStorage } from './actions/GetStorage';

export default function App() {
  const dispatch = useDispatch();

  const store = useSelector(state => state.storage.filter((good) => (good.name.toLowerCase().includes(state.search) && good.category.toLowerCase().includes(state.filterCat))));

  dispatch(GetStorage());

  return (
    <div className='container center'>
      <Header />
      <Menu />
      <TopMenu />
      <ItemList store={store} />
      <Footer />
      <Modal />
    </div>
  );
}
