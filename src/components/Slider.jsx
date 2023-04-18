import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img width={420} height={400}
          className="d-block w-100"
          src="./img/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Океан</h3>
          <p>Вода-источник жизни и энергии.</p>
          <Link exact to={'/form'}>
            <Button variant="outline-dark">Обратная связь</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={420} height={400}
          className="d-block w-100"
          src="./img/second.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Горный пик</h3>
          <p>Горная вершина прекрасна и прохладна.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={400}
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Высокогорье</h3>
          <p>
            Путешествие компанией скаршивает наслаждение природой.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider