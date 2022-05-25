import React from 'react';
import { Link } from 'react-router-dom';
import User_icon from '../../images/red-user-icon.png';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/"><div className='logo'>Movie React Sample</div></Link>
      <div className='user'><img src={User_icon} alt="User"/></div>
    </div>
  );
};

export default Header;