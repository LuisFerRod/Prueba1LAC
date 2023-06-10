'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from '../app/about/page';
import Call from '../app/Call';
import Projects from '../app/Projects';
import Link from 'next/link';

const Navbar = () => {


  return (
    <nav>
      <div className={styles.center}>
        <div>
          <Image src="/logo.jpg" alt="Logo de una poderosa paloma" width={50} height={50} />
        </div>
        <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
        <button className="btn btn-outline-primary" data-section="home">
            <Link href="/">
              Inicio
            </Link>
          </button>
          <button className="btn btn-outline-primary" data-section="about">
            <Link href="/about">
              ¿Quién soy?
            </Link>
          </button>
          <button className="btn btn-outline-primary" data-section="projects">
            <Link href="/projects">
              Proyectos
            </Link>

          </button>
          <button className="btn btn-outline-primary" data-section="call">
            <Link href="/call">
              Call to action
            </Link>

          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
