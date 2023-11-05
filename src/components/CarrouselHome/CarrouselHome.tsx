import Carousel from 'react-bootstrap/Carousel';

function CarrouselHome() {
  return (
    <Carousel className='mb-5'>
      <Carousel.Item>
        <img 
            className='d-block w-100'
            style={{maxHeight: "300px", objectFit: "cover"}}
            src='src/assets/images/Screenshot 2023-04-14 091538.png' alt='    '
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
            className='d-block w-100'
            style={{maxHeight: "300px", objectFit: "cover"}}
            src='src/assets/images/Screenshot 2023-04-14 091613.png' alt=''
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
            className='d-block w-100'
            style={{maxHeight: "300px", objectFit: "cover"}}
            src='src/assets/images/Screenshot 2023-04-14 091645.png' alt='    '
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselHome;