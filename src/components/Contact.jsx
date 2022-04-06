import React from "react";
import Gmap from "./Maps";

function Contact() {
  return (
    <div className="text-contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="d-flex flex-column d-inline-flex p-2">
            <h1 class="border border-warning rounded">Contacto</h1>
            <p class="text-light">
              Localizados en Av. Carlos Canseco 3397, LA MARINA, 82103 Mazatlán, Sin. Para cualquier aclaración consultar nuestra página de Facebook, de Twitter o directamete
              a nuestro correo electrónico.
              Número de celular: 6689562914
            </p>
          </div>
        </div>
      </div>
      <div className="mapa">
          <Gmap/>
      </div>
    </div>
  );
}

export default Contact;