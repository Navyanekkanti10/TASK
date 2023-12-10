import { useState } from 'react';

const useNavbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return {
    activeItem,
    handleItemClick,
  };
};

export default useNavbar;