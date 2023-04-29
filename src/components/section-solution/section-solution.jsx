import scss from './section-solution.module.scss'
import imgjpg from "../../images/home/people.jpg";
import imgjpg2x from "../../images/home/people@2x.jpg";
import imgwebp from "../../images/home/people.webp";
import imgwebp2x from "../../images/home/people@2x.webp";


export const SectionSolution = () => {
    return (
      <div>
        <div>
          <picture className={scss.picture}>
            <source
              srcSet={`${imgwebp} 1x, ${imgwebp2x} 2x `}
              type="image/webp"
              width="320px"
            />
            <source
              srcSet={`${imgjpg} 1x, ${imgjpg2x} 2x `}
              type="image/jpg"
              width="320px"
            />
            <img
              className={scss.picture}
              src={imgjpg}
              alt="team"
              width="320px"
            />
          </picture>
        </div>
        <div className={scss.solutions}>
          <p>What are you looking for</p>
          <h2>We provide bespoke solutions</h2>
          <p className={scss.text}> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
                </p>
                <button type='button' className={scss.solutionButton}>Read more</button>
        </div>
      </div>
    );
}