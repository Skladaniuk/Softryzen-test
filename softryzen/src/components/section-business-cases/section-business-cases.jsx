import { img } from "./img";
import scss from "./section-business-cases.module.scss";

export const SectionBusinessCases = () => {
  return (
    <div className={scss.sectionCases}>
      <div className={scss.casesWrapper}>
        <p className={scss.title}>This what we do</p>
        <h2>Business Cases</h2>
        <p className={scss.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <div className={scss.imgWrapper}>
          <ul>
            <li>
              <picture className={scss.picture}>
                <source
                  srcSet={`${img.imgcases1webp} 1x, ${img.imgcases1webp2x} 2x `}
                  type="image/webp"
                  width="280px"
                />
                <source
                  srcSet={`${img.imgcases1jpg} 1x, ${img.imgcases1jpg} 2x `}
                  type="image/jpg"
                  width="280px"
                />
                <img
                  className={scss.picture}
                  src={img.imgcases1jpg}
                  alt="case1"
                  width="280px"
                />
              </picture>
            </li>
            <li>
              <picture className={scss.picture}>
                <source
                  srcSet={`${img.imgcases2webp} 1x, ${img.imgcases2webp2x} 2x `}
                  type="image/webp"
                  width="280px"
                />
                <source
                  srcSet={`${img.imgcases2jpg} 1x, ${img.imgcases2jpg2x} 2x `}
                  type="image/jpg"
                  width="280px"
                />

                <img
                  className={scss.picture}
                  src={img.imgcases2jpg}
                  alt="case2"
                  width="280px"
                />
              </picture>
            </li>
            <li>
              <picture className={scss.picture}>
                <source
                  srcSet={`${img.imgcases3webp} 1x, ${img.imgcases3webp2x} 2x `}
                  type="image/webp"
                  width="280px"
                />
                <source
                  srcSet={`${img.imgcases3jpg} 1x, ${img.imgcases3jpg2x} 2x `}
                  type="image/jpg"
                  width="280px"
                />

                <img
                  className={scss.picture}
                  src={img.imgcases3jpg}
                  alt="case3"
                  width="280px"
                />
              </picture>
            </li>
            <li>
              <picture className={scss.picture}>
                <source
                  srcSet={`${img.imgcases4webp} 1x, ${img.imgcases4webp2x} 2x `}
                  type="image/webp"
                  width="280px"
                />
                <source
                  srcSet={`${img.imgcases4jpg} 1x, ${img.imgcases4jpg2x} 2x `}
                  type="image/jpg"
                  width="280px"
                />

                <img
                  className={scss.picture}
                  src={img.imgcases4jpg}
                  alt="case4"
                  width="280px"
                />
              </picture>
            </li>
            <li>
              <picture className={scss.picture}>
                <source
                  srcSet={`${img.imgcases5webp} 1x, ${img.imgcases5webp2x} 2x `}
                  type="image/webp"
                  width="280px"
                />
                <source
                  srcSet={`${img.imgcases5jpg} 1x, ${img.imgcases5jpg2x} 2x `}
                  type="image/jpg"
                  width="280px"
                />

                <img
                  className={scss.picture}
                  src={img.imgcases5jpg}
                  alt="case5"
                  width="280px"
                />
              </picture>
            </li>
            <li>
              <picture className={scss.picture}>
                <source
                  srcSet={`${img.imgcases6webp} 1x, ${img.imgcases6webp2x} 2x `}
                  type="image/webp"
                  width="280px"
                />
                <source
                  srcSet={`${img.imgcases6jpg} 1x, ${img.imgcases6jpg2x} 2x `}
                  type="image/jpg"
                  width="280px"
                />

                <img
                  className={scss.picture}
                  src={img.imgcases6jpg}
                  alt="case6"
                  width="280px"
                />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
