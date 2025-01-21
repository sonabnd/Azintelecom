import css from './page-introduction.module.scss';
import homeIcon from '/src/assets/images/icons/home-icon.png';
import rightIcon from '/src/assets/images/icons/right-icon-intro.png';
import useLocalization from '../../../assets/lang';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router/routes';


const PageIntroductionComponent = ({ title, description }: { title: string; description: string}) => {
    const translate = useLocalization();

    return (
        <div className={css.introSection}>
            <div className={css.intro}>
                <div className={css.goHome}>
                    <Link to={Routes.home}><img src={homeIcon} className={css.homeIcon} /></Link>
                    <img src={rightIcon} className={css.rightIcon} />
                    <span className={css.currentTitle}>{title}</span>
                </div>
                <div className={css.content}>
                    <h2 className={css.title}>{title}</h2>
                    <p className={css.description}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PageIntroductionComponent;
