import useLocalization from '../../../../assets/lang';
import css from './introduction.module.scss';
import Spline from '@splinetool/react-spline';

const IntroductionComponent = () => {
    const translate = useLocalization();
    return (
        <div className={css.sona}>
            <div className='container-fluid'>
                <section>
                    <div className={css.introContainer}>
                        <div className={css.innerContainer}>
                            <div className='container'>
                                <div className={css.rightLeft}>
                                    <div className='row'>
                                        <div className='col-lg-7 d-none d-lg-block'>
                                            <div className={css.left}>
                                                <h1 className={css.introText}>
                                                    {translate('intro_text1')}{' '}
                                                    <span>{translate('intro_text2')}</span>{' '}
                                                    {translate('intro_text3')}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className={css.right}>
                                            <div className={css.splineContainer}>
                                                <Spline
                                                    className={css.webSpline}
                                                    scene='https://prod.spline.design/YlwyaKE3cGCGKOD6/scene.splinecode'
                                                />
                                                <Spline
                                                    className={css.mobileSpline}
                                                    scene='https://prod.spline.design/ylT5eofu21VF59QS/scene.splinecode'
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-7 d-lg-none d-block'>
                                            <h1 className={css.introText}>
                                                {translate('intro_text1')}{' '}
                                                <span>{translate('intro_text2')}</span>{' '}
                                                {translate('intro_text3')}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default IntroductionComponent;

{
    /* <div className='row'> */
}
{
    /* <div className='col-lg-6'> */
}

{
    /* </div> */
}
{
    /* <div className='col-lg-6'> */
}
{
    /* <div className={css.right}>
                                                <div className={css.splineContainer}> */
}
{
    /* <Spline className={css.figure} scene="https://prod.spline.design/YlwyaKE3cGCGKOD6/scene.splinecode" /> */
}
{
    /* </div>
                                            </div> */
}
{
    /* </div> */
}
{
    /* </div> */
}
