// Import necessary libraries
import React, { useState } from 'react';

import Navbar from './Navbar';
import Header from './Header';



const HeaderNavbar = () => {
  return (
    <div>
      <Header /> {/* Header is hidden on small screens using `hidden md:block` */}
      <Navbar />
    </div>
  );
};

export default HeaderNavbar;
