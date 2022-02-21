import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container container-fluid">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
            className="mvision"
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require("./img/mision-vision.png")}
              alt=""
            />
          </div>
          <div class="col-lg-5 ">
                    <h2 class="border border-warning rounded">Misión</h2>
                    <p class="text-white">La misión de <b>Grupo Soria</b> es distinguirse por satisfacer las necesidades de productos y servicios a sus clientes através de la optimización de nuestros recursos, buscando la mejora continua y así lograr consolidarse como la solución integral por excelencia.
                    Además en <b>Grupo Soria</b> tenemos como consigna propiciar un sano ambiente de trabajo y entorno productivo, fomentando el trabajo en equipo y colaboración del personal de las empresas que conforman al grupo.</p>
                    <h2 class="border border-warning rounded">Visión</h2>
                    <p class="text-white">Consolidarnos como una de las empresas proveedoras de materiales y ferreteras más importantes del sur de Sinaloa, de rápido crecimiento, contando con una inovadora organización y filosofía empresarial.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;