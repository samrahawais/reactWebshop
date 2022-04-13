import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


//import './componentsStyle.css';

export default function Product() {
    //const url='https://webshop.wm3.se/api/v1/shop/products.json?media_file=true';
    const [product, setProduct] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }
    useEffect(() => {
        if (searchTerm) {
            axios.get(`https://webshop.wm3.se/api/v1/shop/products/search.json?q=${searchTerm}&media_file=true`)
                .then(response => {
                    console.log(response.data)

                    setProduct(response.data)
                })
        }
    }, [searchTerm])

    useEffect(() => {
        axios.get('https://webshop.wm3.se/api/v1/shop/products.json?media_file=true')
            .then(response => {
                console.log(response.data)

                setProduct(response.data)
            })
    }, [])

    return (
        <div>
            <div className="col-lg searchbox mg-25">
                <input type='text' className="search-input" placeholder='Search' value={searchTerm} onChange={handleSearch} />
                <i className="fas fa-search"></i>
            </div>
            
            <div className="row g-0 mg-25">
            {
                product?.products?.map((product, index) => (
                    <Card className="col-md-4" key={product.id}>
                        <Card.Img variant="top" src={product.product_image.url} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                        </Card.Body>
                    </Card>
                    ),
                )
            }
            </div>
        </div>
    ) //return  
} // main function
