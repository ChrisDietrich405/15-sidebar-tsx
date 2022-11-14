import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  const { handleCloseModal, isModalOpen } = useGlobalContext()
  return <div className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
    <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn">
            <FaTimes onClick={handleCloseModal}/>
        </button>
    </div>

  </div>
}

export default Modal