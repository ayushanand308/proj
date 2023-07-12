import React, { useState, useRef, useEffect } from 'react';
import Modal from './modal';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { PropagateLoader } from 'react-spinners';
import image1 from '../src/images/i1.png';
import image2 from '../src/images/i2.png';
import image3 from '../src/images/i3.png';
import image4 from '../src/images/i4.png';
import image5 from '../src/images/i5.png';
import image6 from '../src/images/i6.png';
import image7 from '../src/images/i7.png';
import image8 from '../src/images/i8.png';
import image9 from '../src/images/i9.png';
import image10 from '../src/images/i10.png';
import image11 from '../src/images/i11.png';
import image12 from '../src/images/i12.png';

const ImageVariation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ img: '', i: 0 });
  const [loading, setLoading] = useState(false);

  const [fetchedImage, setFetchedImage] = useState(() => {
    const storedImages = localStorage.getItem('fetchedImages');
    return storedImages ? JSON.parse(storedImages) : [];
  });

  const viewImage = (img, i) => {
    console.log(img, i);
    setData({ img, i });
  };

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

  const uploadImage = async (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    setModalOpen(true);
    setSelectedImage(e.target.files[0]);
    e.target.value = null;
    try {
      const options = {
        method: 'POST',
        body: formData,
      };
      const response = await fetch('http://localhost:8081/upload', options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateVariations = async () => {
    setLoading(true);
    try {
      const options = {
        method: 'POST',
      };
      const response = await fetch('http://localhost:8081/variations', options);
      const data = await response.json();
      console.log(data);
      const imageUrls = data.map((item) => item.url); // Extract the URLs from data array
      setFetchedImage((prevImages) => [...prevImages, ...imageUrls]); // Append new URLs to the existing array
      setError(null);
      setModalOpen(false);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    localStorage.setItem('fetchedImages', JSON.stringify(fetchedImage));
  }, [fetchedImage]);

  const fileInputRef = useRef(null);

  const openFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-5">
      <p className="extra-info text-center">
        <label
          htmlFor="files"
          className="bg-gray-200 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-300 transition-colors"
          onClick={openFileUpload}
        >
          <span className="text-gray-800">Upload an image</span>
          <input
            id="file"
            onChange={uploadImage}
            accept="image/*"
            type="file"
            className="hidden"
            ref={fileInputRef}
          />
        </label>
      </p>
      {modalOpen && (
        <div className="overlay ">
          <Modal
            setModalOpen={setModalOpen}
            setSelectedImage={setSelectedImage}
            generateVariations={generateVariations}
            selectedImage={selectedImage}
          />
        </div>
      )}

      {data.img && (
        <div className="bg-black fixed flex justify-center items-center overflow-hidden max-w-lg">
          <img src={data.img} alt="" className="w-auto max-w-screen-lg max-h-96" />
        </div>
      )}

      <ResponsiveMasonry
        className="my-4"
        columnsCountBreakPoints={{ 350: 3, 750: 3, 900: 3 }}
      >
        <Masonry gutter="5px">
          {fetchedImage.map((imageUrl, i) => (
            <img
              loading="lazy"
              key={i}
              src={imageUrl}
              className="rounded-xl custom:flex-row-reverse"

              
              alt=""
              /* onClick={() => viewImage(imageUrl, i)} */
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {(
        <ResponsiveMasonry
          className="my-10"
          columnsCountBreakPoints={{ 350: 3, 750: 4, 900: 4 }}
        >
          { <h1>Sample Variations</h1> }
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
      {loading && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <PropagateLoader color="#36d7b7" size={10} speedMultiplier={1} style={{ position: 'fixed', bottom: '20px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageVariation;
