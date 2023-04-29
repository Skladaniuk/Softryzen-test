import scss from './App.module.scss'
import { SectionHero } from '../section-hero/section-hero';
import { SectionHeader } from '../section-header/section-header';
import { SectionSolution } from '../section-solution/section-solution';
import { SectionBusinessCases } from '../section-business-cases/section-business-cases';
import { SectionBlog } from '../section-blog/section-blog';
import { SectionTeam } from '../section-team/section-team';
import { SectionCallback } from '../section-callback/section-callback';
function App() {
  return (
    <div className={scss.containerWrapper}>
      <div className={scss.wrapper}>
        <SectionHeader />/
        <SectionHero />
      </div>
      <SectionSolution />
      <SectionBusinessCases />
      <SectionBlog/>
      <SectionTeam />
      <SectionCallback/>
     
    </div>
  );
}

export default App;
