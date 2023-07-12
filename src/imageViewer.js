import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faDownload } from "@fortawesome/free-solid-svg-icons";
import {saveAs} from 'file-saver'

const ImageViewer = ({ imageUrl, onClose }) => {
  const handleGoToUrl = () => {
    window.open(imageUrl, "_blank");
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="max-w-xl custom2:w-3/4 custom:w-3/4 max-h-full ">
        <div className="relative">
        <button
          className="absolute right-1 top-2 bg-black  px-2 rounded-full hover:bg-white hover:text-black text-white"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
          <img className="rounded-lg mb-2" src={imageUrl} alt="Selected Image" />
          <FontAwesomeIcon
            onClick={handleGoToUrl}
            icon={faDownload}
            className="hover:bg-white text-white bg-black p-4 hover:text-black hover:cursor-pointer rounded-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default ImageViewer;

