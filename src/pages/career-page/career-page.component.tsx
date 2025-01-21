import css from './career-page.module.scss';
import CareerIntroductionComponent from './components/career-introduction/career-introduction.component'
import CareerLifeComponent from './components/career-life/career-life.component';
import VacancyComponent from './components/vacancy/vacancy.component';

const CareerPageComponent = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className={css.sectionPart}>
                    <CareerIntroductionComponent/>
                    <VacancyComponent/>
                    <CareerLifeComponent/>
                </div>
            </div>
        </div>
    )
}

export default CareerPageComponent