import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="footer-grid">
        <div className="logo-column">
          <div className="logo">
            <Image src="/logo.jpg" alt="Logo de la empresa" width={100} height={100} />
          </div>
        </div>
        <div className="email-column">
          <h4>Correos Electrónicos</h4>
          <ul>
            <li>luis.rodriguez21@ucr.ac.cr</li>
            <li>luisfdo321123@gmail.com</li>
          </ul>
        </div>
        <div className="social-column">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="https://www.facebook.com/luisfernando.rodriguezvargas.1">Facebook</a></li>
            <li><a href="https://twitter.com/LuisFerRodVar">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;