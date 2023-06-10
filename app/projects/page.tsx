import React from 'react';

export default function Page() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Proyectos Realizados</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel" style={{ width: "400px", height: "200px" }}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://via.placeholder.com/200x100?text=Proyecto+1" className="d-block w-100" alt="Proyecto 1" />
                <div className="carousel-caption">
                  <h3 className="text-center">Proyecto 1</h3>
                  <p className="text-center">Descripción del proyecto 1</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/200x100?text=Proyecto+2" className="d-block w-100" alt="Proyecto 2" />
                <div className="carousel-caption">
                  <h3 className="text-center">Proyecto 2</h3>
                  <p className="text-center">Descripción del proyecto 2</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/200x100?text=Proyecto+3" className="d-block w-100" alt="Proyecto 3" />
                <div className="carousel-caption">
                  <h3 className="text-center">Proyecto 3</h3>
                  <p className="text-center">Descripción del proyecto 3</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
