import React from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Menu from './components/Menu';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import { connect } from 'react-redux';

function App({ store }) {

  return (
    <div className='container center'>
      <Header />
      <Menu />
      <TopMenu />
      <ItemList store={store} />
      <Footer />
    </div>);
}

export default connect(
  state => ({
    store: state.storage.filter((good) => (good.name.toLowerCase().includes(state.search) && good.category.toLowerCase().includes(state.filterCat))),
  }),
  dispatch => ({})
)(App)