
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
                                <div className='col-md-7'>
                                    <div className={css.left}>
                                        <p>{translate('intro_text1')}</p>
                                        <p className={css.digitalFuture}>{translate('intro_text2')}</p>
                                        <p>{translate('intro_text3')}</p>
                                    </div>
                                </div>
                                <div className='col-md-5'>
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