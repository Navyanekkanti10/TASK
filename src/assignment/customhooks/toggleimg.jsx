
import { useState } from 'react';

const useImageToggle = (image1, image2) => {
  const [currentImage, setCurrentImage] = useState(image1);

  const toggleImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === image1 ? image2 : image1
    );
  };

  return { currentImage, toggleImage };
};

export default useImageToggle;