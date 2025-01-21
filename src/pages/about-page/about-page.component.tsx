import AboutAchievmentsComponent from './about-achievements/about-achievements.components';
import AboutCompanyComponent from './about-company/about-company.component';
import AboutIntroductionComponent from './about-introduction/about-introduction.component';
import css from './about-page.module.scss';
import AboutStructureComponent from './about-structure/about-structure.component';
import AboutSucessComponent from './about-success/about-success.component';
import AboutValuesComponent from './about-values/about-values.componnet';

const AboutPageComponent = () => {
  return (
    <div>
        <div className='container-fluid'>
            <div className={css.sectionPart}>
                <AboutIntroductionComponent/>
                <AboutCompanyComponent/>
                <AboutAchievmentsComponent/>
                <AboutStructureComponent/>
                <AboutSucessComponent/>
                <AboutValuesComponent/>
            </div>
        </div>
    </div>
  )
}

export default AboutPageComponent