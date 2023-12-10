import React from 'react';
import useNavbar from './navbar';

const UseNavbar = () => {
  const { activeItem, handleItemClick } = useNavbar();

  return (
    <nav style={{}}>
      <ul>
        <a href='' onClick={() => handleItemClick('home')}>
          Home
        </a>
        <a href='' onClick={() => handleItemClick('about')}>
          About
        </a>
        <a href='' onClick={() => handleItemClick('contact')}>
          Contact
        </a>
      </ul>
    </nav>
  );
};

export default UseNavbar;