import React, { Fragment, useContext } from "react"
import Slider from "react-slick"
import ProductItem from "../components/ProductItem"
import ProductPopup from "../components/ProductPopup"
import { CartContext } from "../context/CartContext"

export default function SliderProducts({ config }) {
  const { productIdsInCart, addToCart, removeFromCart } = useContext(CartContext)

  const settings = {
    arrows: true,
    dots: false,
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1152,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Fragment>
      <div className="slider_products">
        <Slider {...settings}>
          {config.map((item) => (
            <ProductItem
              key={item.title}
              {...item}
              inCart={!!productIdsInCart[item.id]}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </Slider>
      </div>
      {config.map((item) => (
        <ProductPopup
          key={item.title}
          {...item}
          inCart={!!productIdsInCart[item.id]}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Fragment>
  )
}
