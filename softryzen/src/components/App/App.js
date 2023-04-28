import scss from './App.module.scss'
import { SectionHero } from '../section-hero/section-hero';
import { SectionHeader } from '../section-header/section-header';
import { SectionSolution } from '../section-solution/section-solution';
import { SectionBusinessCases } from '../section-business-cases/section-business-cases';

function App() {
  return (
    <div className={scss.containerWrapper}>
      <div className={scss.wrapper}>
        <SectionHeader />/
        <SectionHero />
      </div>
      <SectionSolution />
      <SectionBusinessCases/>
    </div>
  );
}

export default App;
