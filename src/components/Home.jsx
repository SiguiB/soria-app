import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="text-center text-white">
          <h1>¿Quiénes somos?</h1>
            <p>Somos una empresa orgullosamente Mazatleca que proporciona productos, servicios y soluciones para obra y hogar, que suman los esfuerzos de más de 500 colaboradores por lograr ofrecer el mejor servicios y atención a nuestros clientes y proveer productos de la mejor calidad.</p>
          </div>
          <div class="col-lg-7 mx-auto">
            <img
              className="promo"
              class="img-fluid rounded mb-4 mb-lg-5 mt-5"
              src={require("./img/promo.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;