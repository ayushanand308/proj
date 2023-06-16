import ImageInput2 from "./imageInput2";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { PropagateLoader } from 'react-spinners';
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import ImageViewer from "./imageViewer";
import { useState } from "react";

const ImageGeneration = ({ generatedImages, handlesubmit1, value1, setValue1, prompt, isLoading }) => {
  const navigate = useNavigate();
  const [selectedImage,setSelectedImage]=useState(null);

  const openImageViewer=(imageUrl)=>{
    setSelectedImage(imageUrl)
  }
  const closeImageViewer=()=>{
    setSelectedImage(null);
  }

  return (
    <div className="">
      <button className="bg-rose-200 sticky w-full top-0 max" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
      <div className="mt-8 w-3/4 flex-col justify-center items-center mx-auto">
        {prompt.map((p, index) => (
          <div key={index} className="m-8 flex-row sm:flex-row items-center justify-center">
            <p className="text-center bg-rose-100 rounded-t-lg p-2">{p}</p>
            <div className="flex justify-center gap-2 bg-rose-500 rounded-b-lg px-6 py-6 mt-0 ">
              {generatedImages[index]?.map((image, imageIndex) => (
                <img
        
                  key={imageIndex}
                  className="w-1/2 rounded-lg"
                  src={image.url}
                  onClick={()=>openImageViewer(image.url)}
                  alt={`Generated Image ${index + 1}`}
                />
              ))}

            </div>
          </div>
        ))}
        {selectedImage && (
        <ImageViewer className="" imageUrl={selectedImage} onClose={closeImageViewer} />
      )}
      </div>
      
      <div className="relative">
        {isLoading && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
            <PropagateLoader color="#36d7b7" size={10} speedMultiplier={1} style={{position:"fixed",bottom:"90px"}} />
          </div>
        )}
        <ImageInput2 handlesubmit1={handlesubmit1} value1={value1} setValue1={setValue1} />
      </div>
    </div>
  );
};

export default ImageGeneration;
