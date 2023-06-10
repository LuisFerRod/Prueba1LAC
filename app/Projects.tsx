import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


const Projects = () => {
    return (
        <div>
            <div>
                <h2>Proyectos</h2>
                <div className='container'>
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                            ></li>
                            <li
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <Image
                                        src="/imagen1.jpg"
                                        alt="imagen 1"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <Image
                                        src="/imagen2.jpg"
                                        alt="imagen 2"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <Image
                                        src="/imagen3.jpg"
                                        alt="imagen 3"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
