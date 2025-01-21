import css from './about-achievments.module.scss'
import SectionTitleComponent from '../../../core/shared/section-title/section-title.component'
import useLocalization from '../../../assets/lang'
import Spline from '@splinetool/react-spline';
import classNames from 'classnames';

const AboutAchievmentsComponent = () => {
  const translate = useLocalization();
  const achievementsData = [
    {
      id: 1,
      number: '150+',
      text: 'Yerli və beynəlxalq tərəfdaş',
    },
    {
      id: 2,
      number: '2100+',
      text: 'Kvadrat metr server sahəsi',
    },
    {
      id: 3,
      number: '400+',
      text: 'Peşəkar mütəxəssis',
    },
    {
      id: 4,
      number: '7',
      text: 'Beynəlxalq sertifikat',
    }
  ]
  return (
    <div className={css.achievements}>
        <section>
          <div className='container'>
            <div className={css.achievementsContainer}>
              <div className={css.heading}>
                <SectionTitleComponent
                  title={translate('achievements_title')}
                  description={translate('achievements_description')}
                  forTitle={css.forTitle}
                  forDescription={css.forDescription} />
              </div>
              <div className={css.splineContainer}>
                <Spline className={css.spline} scene='https://prod.spline.design/xEov8w9BUQbdNLU3/scene.splinecode' />
              </div>
              <div className={css.main}>
                <div className={css.intro}>
                  {
                    achievementsData.map((item, index) => (
                      <div className={classNames(css.card, css[`card-${index + 1}`])} key={item.id}>
                        <p className={css.number}>{item.number}</p>
                        <span className={css.text}>{item.text}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

        </section>
    </div>
  )
}

export default AboutAchievmentsComponent

