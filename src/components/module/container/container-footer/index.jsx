import Card from "../../../base/Card";
import "../container-store/index.css";
import SlickSlider from "../slick-slider";
import tenMinute from "../../../../assets/detail-product/10menit-p.svg";
import { useEffect, useState } from "react";
import { SampleNextArrow, SamplePrevArrow } from "../../../base/button-arrow";

const ContainerFooter = ({ title, desc, items }) => {
  const [slideShow, setSlideShow] = useState(3);
  const [isHover, setIsHover] = useState(false);
  const settings = {
    dots: false,
    infinite: false,
    variableWidth: false,
    speed: 500,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow isHover={isHover} />,
    prevArrow: <SamplePrevArrow isHover={isHover} />,
  };
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1200px)");
    const tablet = window.matchMedia("(min-width: 800px)");
    const handleResize = () => {
      if (desktop.matches === true) {
        setSlideShow(6);
      } else if (tablet.matches === true) {
        setSlideShow(4);
      } else {
        setSlideShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slideShow]);
  return (
    <div className="mt-16 lg:px-[18%]">
      <div className="flex justify-between mb-2">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-blue-500">Lihat Semua</p>
      </div>
      <p>{desc}</p>
      <div
        className="my-6"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <SlickSlider settings={settings}>
          {items?.map(({ img, title, price, sold }, idx) => (
            <div key={idx} className="testimoni">
              <Card>
                <div className="h-[100px] w-full">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative flex flex-col gap-2 px-2">
                  <div className="py-1 font-exo">
                    <p className="font-exo">{title}</p>
                    <p className="text-main-orange font-bold text-lg">
                      {price}
                    </p>
                  </div>
                  <div className="absolute -bottom-[60px]">
                    <img src={tenMinute} alt="" className="w-20 " />
                    <small className="text-gray-500">{sold} terjual</small>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default ContainerFooter;
