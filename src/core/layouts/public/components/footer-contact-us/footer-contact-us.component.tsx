import useLocalization from '../../../../../assets/lang';
import css from './footer-contact-us.module.scss'

const ContactUsComponent = () => {
    const translate = useLocalization();
    const contactUs = [
        {
            id: 1,
            text: translate('write_us'),
            mail: 'info@azintelecom.az',
        },
        {
            id: 2,
            text: translate('join_us'),
            mail: 'jobs@azintelecom.az',
        },
    ]

    return (
        <div className={css.contactUs}>
            {
                contactUs.map(item => (
                    <div className={css.paragraph} key={item.id}>
                        <p>{item.text}</p>
                        <span>{item.mail}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactUsComponent