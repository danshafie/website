import React from 'react'

const Modal = ({ hidden }) => {
  return (
    <div className={`modal-wrapper ${hidden}`}>
      <div className="modal-container">
        <p>
          “I do things like get in a lyft and say, "The library, and step on
          it.”
        </p>
      </div>
    </div>
  )
}

export default Modal
