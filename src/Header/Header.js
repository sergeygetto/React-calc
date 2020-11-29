import React from 'react';
import './Header.css';

import Nav from '../Header/Nav/Nav'


class Header extends React.Component {
  render(){

  return (

<header>
    <div className="top-bar animate-dropdown">European Central Bank</div>
    <div className="main-header">
        <div className="container">
            <h1 className="site-title">Currency Converter </h1>
    <Nav />
        </div>
    </div>
    
</header>
   

);
}
}
export default Header;
