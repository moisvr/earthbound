import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

function Layout(props) {
   return (
      <React.Fragment>
         <Navbar />
         {props.children}
         <Footer />
      </React.Fragment>
   )
};

export default Layout;