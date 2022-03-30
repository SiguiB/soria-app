import React from "react";
import {Carousel} from "react-bootstrap";

export default function BCarousel() {
    return(
        <div>
          <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/ladrillos.jpg"
                    alt="Primera slide"
                    title= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/pinzas.jpg"
                    alt="Segunda slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/tubos.jpg"
                    alt="Tercera slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/taladro.jpg"
                    alt="Cuarta slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/varillas.jpg"
                    alt="Quinta slide"
                    />

                </Carousel.Item>
                </Carousel>
            </div>
    )
}