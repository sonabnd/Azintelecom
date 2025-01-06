import ActionsComponent from './components/actions/actions.component';
import AdvantagesComponent from './components/advantages/advantages.component';
import IntroductionComponent from './components/introduction/introduction.component';
import NewsComponent from './components/news/news.component';
import ProjectsComponent from './components/projects/projects.component';

const HomeComponent = () => {
  return (
    <div>
      <IntroductionComponent/>
      <ActionsComponent/>
      <AdvantagesComponent/>
      <NewsComponent/>
      <ProjectsComponent/>
    </div>
  )
}

export default HomeComponent