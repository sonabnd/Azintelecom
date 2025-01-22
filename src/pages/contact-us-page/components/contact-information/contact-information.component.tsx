import useLocalization from '../../../../assets/lang';
import SectionTitleComponent from '../../../../core/shared/section-title/section-title.component';
import css from './contact-information.module.scss';
import icon1 from '/src/assets/images/icons/contact-info1.png';
import icon2 from '/src/assets/images/icons/contact-info2.png';
import icon3 from '/src/assets/images/icons/contact-info3.png';

const ContactInformationComponent = () => {
    const translate = useLocalization();
    const infoData = [
        {
            id: 1,
            img: icon1,
            title: 'SİMA rəqəmsal sorğular üçün',
            telephone: 'Telefon: 157',
            mail: 'E-poçt: info@sima.az',
            location: 'Ünvan: Üzeyir Hacıbəyli küçəsi 36'
        },
        {
            id: 1,
            img: icon2,
            title: 'SİMA rəqəmsal sorğular üçün',
            telephone: 'Telefon: 157',
            mail: 'E-poçt: info@sima.az',
            location: 'Ünvan: Üzeyir Hacıbəyli küçəsi 36'
        },
        {
            id: 1,
            img: icon3,
            title: 'SİMA rəqəmsal sorğular üçün',
            telephone: 'Telefon: 157',
            mail: 'E-poçt: info@sima.az',
            location: 'Ünvan: Üzeyir Hacıbəyli küçəsi 36'
        },
    ]

    return (
        <div className={css.contact}>
            <section>
                <div className="container">
                    <div className={css.information}>
                        <div className={css.heading}>
                            <SectionTitleComponent
                                title={translate('contact_information_heading')}
                                description={translate('contact_information_description')}
                                forTitle={css.forTitle}
                                forDescription={css.forDescription}
                            />
                        </div>
                        <div className={css.main}>
                            {
                                infoData.map((item, index) => (
                                    <div
                                        className={css.box}
                                        key={item.id}
                                    >
                                        <div className={css.inner}>
                                            <img src={item.img} alt={translate('img_alt')} />
                                            <p className={css.title}>{item.title}</p>
                                            <div className={css.contactUs}>
                                                <p>{item.telephone}</p>
                                                <p>{item.mail}</p>
                                                <p>{item.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactInformationComponent