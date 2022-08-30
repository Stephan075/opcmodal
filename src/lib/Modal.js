import styles from "./Modal.module.css";
import validateImg from "./assets/images/undraw_superhero_kguv.svg";
import PropTypes from "prop-types";

/**
 * Modal reactJS simple et réutilisable
 * @module Opcmodal
 */

const Modal = ({ closeModal }) => {
  return (
    <div className={`${styles.modal}`}>
      <div className={`${styles.modalContent} `}>
        <div className={`${styles.modalImg} `}>
          <img src={validateImg} alt="validateImg" />
        </div>

        <div className={`${styles.text}`}>
          The employer was created! Thank you 😀
        </div>

        <span className={`${styles.modalBtn} `} onClick={closeModal}>
          &#10006;
        </span>
      </div>
    </div>
  );
};

Modal.propTypes = {
  currentData: PropTypes.object,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export { Modal };
