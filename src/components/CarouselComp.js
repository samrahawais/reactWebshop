import React from 'react';
//import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
//import {Button} from 'react-bootstrap'
export default function CarouselComp() {
    return (
        <div>
            <Carousel className="carousel slide" data-ride="carousel" interval={2000}>
                <Carousel.Item>
                    <img className='d-block w-100'
                        src="Store.png"
                        alt="First slide"
                    />
                        {/* <Button variant='primary'> Buy Now</Button> <Button variant="outline-primary">Learn More</Button>{' '} */}
                </Carousel.Item>
               
                <Carousel.Item>
                    <img className='d-block w-100'
                        src="Store2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='d-block w-100'
                        src="Store3.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
