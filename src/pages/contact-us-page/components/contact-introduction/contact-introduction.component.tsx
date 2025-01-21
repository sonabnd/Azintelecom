import useLocalization from '../../../../assets/lang';
import PageIntroductionComponent from '../../../../core/shared/page-introduction/page-introduction.component';
import css from './contact-introduction.module.scss';

const ContactIntroductionComponent = () => {
    const translate = useLocalization();
  return (
    <div className='section'>
        <section className={css.introduction}>
            <div className={css.introductionContainer}>
                <PageIntroductionComponent
                title = {translate('career_title')} 
                description ={translate('career_description')}
                />
            </div>
        </section>
      </div>
  )
}

export default ContactIntroductionComponent;