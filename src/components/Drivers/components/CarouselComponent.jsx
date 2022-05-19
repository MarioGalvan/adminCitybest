import React from "react";
import { Carousel, Image } from "antd";

export const CarouselComponent = ({ carInsuranceUrl, technicalRevisionUrl, trafficLicenseUrl }) => {

  const images = [carInsuranceUrl, technicalRevisionUrl, trafficLicenseUrl];

  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "transparent",
    // background: "#364d79"
  };

  return (
    <Carousel arrows={true} style={{ width: 300, height: 300 }}>
      {images.map((image) => (
        <div key={image}>
          <h3 style={contentStyle}>{<Image src={image} height="300px" />}</h3>
        </div>
      ))}
    </Carousel>
  );
};
