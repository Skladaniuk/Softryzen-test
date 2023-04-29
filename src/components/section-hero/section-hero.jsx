import scss from './section-hero.module.scss';

import { Button } from '../Button/button';

export const SectionHero = () => {
    return (
      <section className={scss.hero}>
        <h1 className={scss.hero__title}>The Sky Is The Limit</h1>
        <h2 className={scss.hero__tagline}>
          We provide world class financial assistance
        </h2>
        <div className={scss.hero__button}>
          <Button className={scss.buttonss} />
        </div>
      </section>
    );
}
