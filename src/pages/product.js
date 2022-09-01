import React, {useState} from "react";
import { Col, Row} from "react-bootstrap";
import IconMinus from '../assets/images/icon-minus.svg';
import IconPlus from '../assets/images/icon-plus.svg';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {images} from "../data/images";
import '../styles/style.css'
import LightBox from "./lightBox";



const Product = ({productQuantity, setProductQuantity, setCartProductQuantity}) => {

   const [currentProductImage, setCurrentProductImage] = useState(0);
   const [lightBox, setLightBox] = useState(false);
   const addToCart = () => {
       setCartProductQuantity((prevState) => prevState + productQuantity);
       setProductQuantity(0);
   }
  return (
      <div className="hero">
          <div className="container">
              <Row className="left">
                  <Col lg={6}>
                      <img className="product1" src={images[currentProductImage].png} alt=""
                            onClick={() => setLightBox(true)}
                      />
                      <div className="thumbnail d-flex">
                          <div className="thumb">
                              <img className={currentProductImage === 0 ? 'active' :''}
                                   onClick={ () => setCurrentProductImage(0)}
                                   src={images[0].thumbnail}
                                   alt=""/>
                          </div>
                          <div className="thumb">
                              <img className={currentProductImage === 1 ? 'active' :''}
                                   onClick={() => setCurrentProductImage(1)}
                                   src={images[1].thumbnail} alt=""/>
                          </div>
                          <div className="thumb">
                              <img className={currentProductImage === 2 ? 'active' :''}
                                   onClick={() => setCurrentProductImage(2)}
                                   src={images[2].thumbnail} alt=""/>
                          </div>
                          <div className="thumb">
                              <img className={currentProductImage === 3 ? 'active' :''}
                                   onClick={() => setCurrentProductImage(3)}
                                   src={images[3].thumbnail} alt=""/>
                          </div>

                      </div>
                  </Col>
                  <Col lg={6}>
                      <div className="product-info">
                          <h5>Sneaker Company</h5>
                          <h2>Fall Limited Edition Sneakers</h2>
                         <p>These low-profile sneakers are your perfect casual wear
                             companion. Featuring a durable rubber outer sole, they’ll
                             withstand everything the weather can offer.</p>
                          <div className="d-flex">
                              <h4 className="price">$125.00</h4>
                              <span className="percentage-off">50%</span>
                          </div>
                          <span className="initial-price">$250.00</span>
                          <div className=" button-items d-flex">
                              <div className="item-count">
                                  <img className="minus" src={IconMinus} alt=""
                                       onClick={() =>
                                           setProductQuantity((prevState) => (prevState !== 0 ? prevState - 1 : 0))
                                       }
                                  />
                                  <h5 className="quantity">{productQuantity}</h5>
                                  <img className="plus" src={IconPlus} alt=""  onClick={() => setProductQuantity((prevState) => prevState + 1)}/>
                              </div>
                              <div className="Add">
                                  <button className="btn-primary add-to-cart" onClick={addToCart} ><AiOutlineShoppingCart/> Add to cart</button>
                              </div>
                          </div>
                      </div>

                  </Col>
              </Row>
          </div>
          {lightBox &&
          <LightBox lightBox={lightBox} setLightBox={setLightBox} images={images}/>
          }
      </div>
  );
}
export default Product;
