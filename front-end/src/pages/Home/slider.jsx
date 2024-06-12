import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imga1 from "../images/alpha/imga1.png";
import imga2 from "../images/alpha/imga2.png";
import imga3 from "../images/alpha/imga3.png";
import imga4 from "../images/alpha/imga4.png";
import imga5 from "../images/alpha/imga5.png";
import imga6 from "../images/alpha/imga6.png";
import imga7 from "../images/alpha/imga7.png";
import imga8 from "../images/alpha/imga8.png";
import imga9 from "../images/alpha/imga9.png";
import imga10 from "../images/alpha/imga10.png";
import imga11 from "../images/alpha/imga11.png";
import imga12 from "../images/alpha/imga12.png";
import imga13 from "../images/alpha/imga13.png";
import imga14 from "../images/alpha/imga14.png";
import imga15 from "../images/alpha/imga15.png";
import imga16 from "../images/alpha/imga16.png";
import imga17 from "../images/alpha/imga17.png";
import imga18 from "../images/alpha/imga18.png";
import imga19 from "../images/alpha/imga19.png";
import imga20 from "../images/alpha/imga20.png";
import imga21 from "../images/alpha/imga21.png";
import imga22 from "../images/alpha/imga22.png";
import imga23 from "../images/alpha/imga23.png";
import imga24 from "../images/alpha/imga24.png";
import imga25 from "../images/alpha/imga25.png";
import imga26 from "../images/alpha/imga26.png";
import imga27 from "../images/alpha/imga27.png";
import imga28 from "../images/alpha/imga28.png";

const ImageSlider = () => {
  const images = [
    { src: imga1, alt: "أ" },
    { src: imga2, alt: "ب" },
    { src: imga3, alt: "ت" },
    { src: imga4, alt: "ث" },
    { src: imga5, alt: "ج" },
    { src: imga6, alt: "ح" },
    { src: imga7, alt: "خ" },
    { src: imga8, alt: "د" },
    { src: imga9, alt: "ذ" },
    { src: imga10, alt: "ر" },
    { src: imga11, alt: "ز" },
    { src: imga12, alt: "س" },
    { src: imga13, alt: "ش" },
    { src: imga14, alt: "ص" },
    { src: imga15, alt: "ض" },
    { src: imga16, alt: "ط" },
    { src: imga17, alt: "ظ" },
    { src: imga18, alt: "ع" },
    { src: imga19, alt: "غ" },
    { src: imga20, alt: "ف" },
    { src: imga21, alt: "ق" },
    { src: imga22, alt: "ك" },
    { src: imga23, alt: "ل" },
    { src: imga24, alt: "م" },
    { src: imga25, alt: "ن" },
    { src: imga26, alt: "ه" },
    { src: imga27, alt: "و" },
    { src: imga28, alt: "ي" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderImageContainerStyle = {
    padding: "5px",
  };

  const sliderImageStyle = {
    width: "90%",
    borderRadius: "10px",
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={sliderImageContainerStyle}>
          <img src={image.src} alt={image.alt} style={sliderImageStyle} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
