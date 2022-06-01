import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './modal.scss'

const Modal = props => {
    
    const [active, setsetActivefirst] = useState(false)

    useEffect(() => {
      setsetActivefirst(props.active)
    }, [props.active])
    

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
        {props.children}
    </div>
  )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = props => {

    const contentRef = useRef(null);
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onCLose) props.onClose();
    }
    return (
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className='bx bx-x'></i>
            </div>
        </div>
    )
}

ModalContent.propTypes= {
    onClose: PropTypes.func
}

export default Modal