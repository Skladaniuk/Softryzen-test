import scss from "./section-team.module.scss";
import { img } from "./img";

export const SectionTeam = () => {
  return (
    <div className={scss.sectionTeam}>
      <p className={scss.sectionTeam__title}>Who we are</p>
      <h2>Our Professional Team</h2>
      <p className={scss.sectionTeam__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul>
        <li>
          <picture>
            <source
              srcSet={`${img.person1webp} 1x, ${img.person1webp2x} 2x `}
              type="image/webp"
              width="280px"
            />
            <source
              srcSet={`${img.person1jpg} 1x, ${img.person1jpg2x} 2x `}
              type="image/jpg"
              width="280px"
            />
            <img src={img.person1jpg} alt="person1" width="280px" />
          </picture>

          <p className={scss.sectionTeam__name}>John Doe</p>
          <p className={scss.sectionTeam__role}>President</p>
        </li>
        <li>
          <picture>
            <source
              srcSet={`${img.person2webp} 1x, ${img.person2webp2x} 2x `}
              type="image/webp"
              width="280px"
            />
            <source
              srcSet={`${img.person2jpg} 1x, ${img.person2jpg2x} 2x `}
              type="image/jpg"
              width="280px"
            />
            <img src={img.person2jpg} alt="person2" width="280px" />
          </picture>
          <p className={scss.sectionTeam__name}>Jane Doe</p>
          <p className={scss.sectionTeam__role}>Vice President</p>
        </li>
        <li>
          <picture>
            <source
              srcSet={`${img.person3webp} 1x, ${img.person3webp2x} 2x `}
              type="image/webp"
              width="280px"
            />
            <source
              srcSet={`${img.person3jpg} 1x, ${img.person3jpg2x} 2x `}
              type="image/jpg"
              width="280px"
            />
            <img src={img.person3jpg} alt="person3" width="280px" />
          </picture>
          <p className={scss.sectionTeam__name}>Steve Smith</p>
          <p className={scss.sectionTeam__role}>Marketing Head</p>
        </li>
      </ul>
    </div>
  );
};
