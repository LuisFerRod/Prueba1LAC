import React from 'react';
import Image from 'next/image'

export default function Page() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Acerca de mí</h1>
          <p>
            ¡Hola! Mi nombre es Luis Fernando Rodríguez y soy desarrollador full stack. Estoy apasionado por la programación. Como dato adicional, soy jugador de ajedrez y me gustan las palomas
          </p>
          <p>
            Puedes encontrar más información sobre mi experiencia y habilidades en mi perfil de LinkedIn.
          </p>
          <a href="https://www.linkedin.com/in/luis-rodr%C3%ADguez-449221279/" target="_blank" rel="noopener noreferrer">Ver mi perfil de LinkedIn</a>
        </div>
        <div className="col-md-6">
          <Image src="/perfil.jpg" alt="Fotografía de un joven apuesto" width={250} height={250} />
        </div>
      </div>
    </div>
  );
  
}

