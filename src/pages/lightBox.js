import React, {useRef, useState} from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import {MdOutlineClose} from "react-icons/md";
import Prev from '../assets/images/icon-previous.svg';
import Next from '../assets/images/icon-next.svg';

const LightBox = ({setLightBox, images}) => {
    const [currentProductImage, setCurrentProductImage] = useState(0);
    const ref = useRef();

    useOnClickOutside(ref, () => setLightBox(false));
  return (
      <div className=" ">
          <div ref={ref} className="lightbox">
              <MdOutlineClose className="close" onClick={() => setLightBox(false)} />
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
              <button className="lightbox-control previous"
                      onClick={() =>
                          setCurrentProductImage((prevState) =>
                              prevState === 0 ? images.length - 1 : prevState - 1
                          )
                      }
              ><img src={Prev} alt=""/></button>
              <button className="lightbox-control next"
                      onClick={() =>
                          setCurrentProductImage((prevState) =>
                              prevState === images.length - 1 ? 0 : prevState + 1
                          )
                      }
              ><img src={Next} alt=""/></button>
          </div>
      </div>
  );
}
export default LightBox;
