import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ModalPop = ({ showModal, toggleModal, headerText, bodyText }) => (
  <div>
    <Modal isOpen={showModal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>{headerText}</ModalHeader>
      <ModalBody>{bodyText}</ModalBody>
      <ModalFooter>
        <Link to={'/'}><Button color="primary">OK</Button></Link>
      </ModalFooter>
    </Modal>
  </div>
);

ModalPop.propTypes = {
  showModal: PropTypes.bool.isRequired, 
  toggleModal: PropTypes.func.isRequired, 
  headerText: PropTypes.string.isRequired, 
  bodyText: PropTypes.string.isRequired
}

export default ModalPop;