import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ setModalOpen, setSelectedImage, selectedImage, generateVariations }) => {
  const [error, setError] = useState(null);
  const ref = useRef(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  const checkSize = () => {
    
      // generateVariations()
      generateVariations()
    
    console.log('selectedImage', selectedImage);
  };

  return (
    <div className="modal flex justify-center items-center">
      <div className="image-container">
        {
          selectedImage &&
          <div onClick={closeModal}>
      <FontAwesomeIcon className="mt-4 hover:cursor-pointer" icon={faRectangleXmark} />
      </div>
        }
      

        {selectedImage && <img src={URL.createObjectURL(selectedImage)} className="flex items-center justify-center mx-50 rounded-lg max-w-md max-h-md" ref={ref} />}
        {selectedImage && <button className="bg-gray-200 rounded-lg mt-4 px-2" onClick={checkSize}>Generate</button>}

      </div>
      {error && <button onClick={closeModal}>Close this and try again</button>}
    </div>
  );
};

export default Modal;
