import css from './section-title.module.scss'

const SectionTitleComponent = ({title, description, forTitle, forDescription, headingDescription}: any) => {

    return (
        <div className={css.heading}>
            <h2 className={forTitle}>{title}</h2>
            <div className={css.lineDescription}>
                <div className={`${css.headingRight} ${headingDescription}`}>
                    <span className={css.headingLine}></span>
                    <p className={forDescription}>{description}</p>
                </div>
            </div>
        </div>
    ); 
};

export default SectionTitleComponent