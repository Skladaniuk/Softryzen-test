import scss from './App.module.scss'
import { SectionHero } from '../section-hero/section-hero';
import { SectionHeader } from '../section-header/section-header';

function App() {
  return (
    <div className={scss.containerWrapper}>
      <div className={scss.wrapper}>
        <SectionHeader />/
        <SectionHero />
        </div>
    </div>
  );
}

export default App;
