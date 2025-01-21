import useLocalization from '../../../assets/lang';
import PageIntroductionComponent from '../../../core/shared/page-introduction/page-introduction.component';
import css from './about-introduction.module.scss';
import introductionBg from '/src/assets/images/statics/about-bg-son.svg';

const AboutIntroductionComponent = () => {
    const translate = useLocalization();

  return (
      <div className='section'>
        <section className={css.introduction}>
            <PageIntroductionComponent
              title = {translate('about')} 
              description ={translate('about_description')}
            />
        </section>
      </div>
  )
}

export default AboutIntroductionComponent