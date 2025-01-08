import useLocalization from '../../../../assets/lang';
import css from './introduction.module.scss'

const IntroductionComponent = () => {
    const translate = useLocalization();
    return (
        <div className='container-fluid'>
            <section>
                <div className={css.introContainer}>
                    <div className={css.rightLeft}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className={css.left}>
                                        <h1>{translate('intro_text1')} <span>{translate('intro_text2')}</span> {translate('intro_text3')} </h1>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className={css.right}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IntroductionComponent