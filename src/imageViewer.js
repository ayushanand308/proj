import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faDownload } from "@fortawesome/free-solid-svg-icons";
import {saveAs} from 'file-saver'


const ImageViewer = ({ imageUrl, onClose }) => {
    const handleDownload=(imageUrl)=>{
        console.log(imageUrl);
        fetch(imageUrl, {
        method: "GET",
        headers: {}
        })
        .then(response => {
            response.arrayBuffer().then(function(buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "image.png"); //or any other extension
            document.body.appendChild(link);
            link.click();
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="max-w-xl custom2:w-3/4 custom:w-3/4 max-h-full">
        <div>
            <img className="rounded-lg mb-2" src={imageUrl} alt="Selected Image" />
            <FontAwesomeIcon onClick={imageUrl=>handleDownload(imageUrl)} icon={faDownload} className="hover:bg-white text-white bg-black p-4 hover:text-black hover:cursor-pointer rounded-full" />

        </div>
        <button className="absolute top-8 right-8 bg-black p-2 rounded-full hover:bg-white hover:text-black text-white" onClick={onClose}>
        <FontAwesomeIcon icon={faClose} />

        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
