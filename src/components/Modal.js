import React from 'react';
import { connect } from 'react-redux';
import './Modal.scss';

function ModalSubmit() {
   return (
      <div className='modal' style={{ height: document.documentElement.clientHeight }}>
         <div className='modal__window'></div>
      </div>
   );
}

export default connect(
   store => ({}),
   dispatch => ({})
)(ModalSubmit)