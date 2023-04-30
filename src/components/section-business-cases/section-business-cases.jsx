import { img } from "./img";
import scss from "./section-business-cases.module.scss";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const SectionBusinessCases = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    {
      srcSet: `${img.imgcases1webp} 1x, ${img.imgcases1webp2x} 2x ,${img.imgcases1jpg} 1x, ${img.imgcases1jpg2x} 2x`,
      src: img.imgcases1webp,
      thumbnailSrc: img.imgcases1jpg,
      alt: "case1",
    },
    {
      srcSet: `${img.imgcases2webp} 1x, ${img.imgcases2webp2x} 2x ,${img.imgcases2jpg} 1x, ${img.imgcases2jpg2x} 2x`,
      src: img.imgcases2webp,
      thumbnailSrc: img.imgcases2jpg,
      alt: "case2",
    },
    {
      srcSet: `${img.imgcases3webp} 1x, ${img.imgcases3webp2x} 2x ,${img.imgcases3jpg} 1x, ${img.imgcases3jpg2x} 2x`,
      src: img.imgcases3webp,
      thumbnailSrc: img.imgcases3jpg,
      alt: "case3",
    },
    {
      srcSet: `${img.imgcases4webp} 1x, ${img.imgcases4webp2x} 2x ,${img.imgcases4jpg} 1x, ${img.imgcases4jpg2x} 2x`,
      src: img.imgcases4webp,
      thumbnailSrc: img.imgcases4jpg,
      alt: "case4",
    },
    {
      srcSet: `${img.imgcases5webp} 1x, ${img.imgcases5webp2x} 2x ,${img.imgcases5jpg} 1x, ${img.imgcases5jpg2x} 2x`,
      src: img.imgcases5webp,
      thumbnailSrc: img.imgcases5jpg,
      alt: "case5",
    },
    {
      srcSet: `${img.imgcases6webp} 1x, ${img.imgcases6webp2x} 2x ,${img.imgcases6jpg} 1x, ${img.imgcases6jpg2x} 2x`,
      src: img.imgcases2webp,
      thumbnailSrc: img.imgcases6jpg,
      alt: "case6",
    },
  ];
  return (
    <div className={scss.sectionCases}>
      <p className={scss.title}>This what we do</p>
      <h2>Business Cases</h2>
      <p className={scss.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>

      <ul className={scss.imgWrapper}>
        {images.map((image, index) => (
          <li className={scss.imgItem} key={index}>
            <img
              className={scss.picture}
              srcSet={image.srcSet}
              width="280px"
              src={image.thumbnailSrc}
              alt={image.alt}
              onClick={() => {
                setCurrentImage(index);
                setIsOpen(true);
              }}
            />
          </li>
        ))}
      </ul>
      {isOpen && (
        <Lightbox
          mainSrc={images[currentImage].src}
          nextSrc={images[(currentImage + 1) % images.length].src}
          prevSrc={
            images[(currentImage + images.length - 1) % images.length].src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % images.length)
          }
          imageTitle={images[currentImage].alt}
        />
      )}
    </div>
  );
};

//
