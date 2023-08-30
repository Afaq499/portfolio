import React from "react";

import beatriceWambui from '../../utils/images/beatrice-wambui.png';
import moon from '../../utils/images/moon.png';

import './style.css';

const Header = () => {
  return (
    <div className="header">
      <img src={beatriceWambui} alt="beauty" />
      <img src={moon} alt="moon" />
    </div>
  )
}

export default Header;
