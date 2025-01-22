import useLocalization from '../../../../assets/lang';
import SectionTitleComponent from '../../../../core/shared/section-title/section-title.component';
import ApplyVacancyComponent from '../apply-vacancy/apply-vacancy-component';
import css from './vacancy.module.scss';
import { HiArrowLongRight } from "react-icons/hi2";

const VacancyComponent = () => {
    const vacancyData = [
        {
            position: 'UX/UI Dizayner',
            date: '24 Dekabr',
        },
        {
            position: 'Sosial media meneceri',
            date: '24 Dekabr',
        },
        {
            position: 'UX/UI Dizayner',
            date: '24 Dekabr',
        },
        {
            position: 'Back-end proqramçı',
            date: '24 Dekabr',
        },
        {
            position: 'UX/UI Dizayner',
            date: '24 Dekabr',
        },
        {
            position: 'UX/UI Dizayner',
            date: '24 Dekabr',
        },
        {
            position: 'UX/UI Dizayner',
            date: '24 Dekabr',
        },
    ]
    const translate = useLocalization();

    return (
        <div className={css.career}>
            <section>
                <div className='container'>
                    <div className={css.vacancy}>
                        <div className={css.heading}>
                            <SectionTitleComponent
                                title={translate('career_vacancy_title')}
                                description={translate('career_vacancy_description')}
                                forTitle={css.forTitle}
                                forDescription={css.forDescription}
                            />
                        </div>
                        <div>
                            <div className={css.vacancyList}>
                                {
                                    vacancyData.map(item => (
                                        <div className={css.card}>
                                            <div className={css.left}>
                                                <p className={css.position}>{item.position}</p>
                                                <span className={css.date}>{item.date}</span>
                                            </div>
                                            <div className={css.right}>
                                                <i><HiArrowLongRight /></i>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={css.applyVacancy}>
                        <ApplyVacancyComponent/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VacancyComponent