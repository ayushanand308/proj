import ImageInput2 from "./imageInput2";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { PropagateLoader } from 'react-spinners';
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import ImageViewer from "./imageViewer";
import { useState,useRef,useEffect } from "react";
import Modal from "./modal";
import { set } from "mongoose";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import image1 from '../src/images/a1.png';
import image2 from '../src/images/a2.png';
import image3 from '../src/images/a3.png';
import image4 from '../src/images/a4.png';
import image5 from '../src/images/a5.png';
import image6 from '../src/images/a6.png';
import image7 from '../src/images/a7.png';
import image8 from '../src/images/a8.png';
import image9 from '../src/images/a9.png';
import image10 from '../src/images/a10.png';
import image11 from '../src/images/a11.png';
import image12 from '../src/images/i12.png';

const ImageGeneration = ({setGenenratedImages, generatedImages, handlesubmit1, value1, setValue1, prompt, isLoading }) => {
  const navigate = useNavigate();
  const [selectedImage,setSelectedImage]=useState(null);
  const [fetchedImage, setFetchedImage] = useState(() => {
    const storedImages = localStorage.getItem('fetchedImages');
    return storedImages ? JSON.parse(storedImages) : [];
  });

  const openImageViewer=(imageUrl)=>{
    setSelectedImage(imageUrl)
  }
  const closeImageViewer=()=>{
    setSelectedImage(null);
  }

  const images = [
    { src: image1, width: '120%', height: '50%' },
    { src: image2, width: '100%', height: '25%' },
    { src: image3, width: '100%', height: '40%' },
    { src: image4, width: '100%', height: '50%' },
    { src: image5, width: '100%', height: '40%' },
    { src: image6, width: '100%', height: '85%' },
    { src: image7, width: '100%', height: '30%' },
    { src: image8, width: '100%', height: '60%' },
    { src: image9, width: '100%', height: '35%' },
    { src: image10, width: '100%', height: '30%' },
    { src: image11, width: '100%', height: '55%' },
    { src: image12, width: '100%', height: '35%' },
  ];



  /* const uploadImage=async(e)=>{
    console.log(e.target.files[0])
    const formData=new FormData();
    formData.append('file',e.target.files[0]);
    setModalOpen(true);
    setSelectedImage(e.target.files[0]);
    e.target.value=null;
    try{
      const options={
        method:"POST",
        body:formData
      }
      const response=await fetch("http://localhost:8000/upload",options);
      const data=await response.json();
      console.log(data)
    }catch(error){
      console.error(error)
    }
  }
  






  const generateVariations=async()=>{
    
    try{
      const options={
        method:"POST",
      }
      const response=await fetch("http://localhost:8000/variations",options);
      const data=await response.json();
      console.log(data)
      setGenenratedImages(data)
      setError(null)
      setModalOpen(false)

    }catch(error){
      console.error(error)
    }
  }



 */

  useEffect(() => {
    localStorage.setItem('fetchedImages', JSON.stringify(fetchedImage));
  }, [fetchedImage]);

  const fileInputRef = useRef(null);

  const openFileUpload = () => {
    fileInputRef.current.click();
  };

  

  return (
    <div className="">
      <button className="bg-rose-200 sticky w-full top-0 max" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
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
      {/* <p className="extra-info text-center">
        <span>
          <label htmlFor="files">Upload an image</label>

          <input id="file" onChange={uploadImage} accept="image/*" type="file" />

        </span>
      </p>
      {modalOpen && <div className="overlay ">
        <Modal setModalOpen={setModalOpen} setSelectedImage={setSelectedImage} generateVariations={generateVariations} selectedImage={selectedImage}/>
      </div>} */}

{(
        <ResponsiveMasonry
          className="my-10"
          columnsCountBreakPoints={{ 350: 3, 750: 4, 900: 4 }}
        >
          <Masonry gutter="5px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image.src}
                style={{ width: image.width, height: image.height }}
                className="rounded-lg"
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}

<Skeleton count={1} width={200}
height={100} />


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
