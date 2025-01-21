import useLocalization from '../../../../assets/lang';
import css from './contact-apply.component.module.scss';
import location from '/src/assets/images/icons/locationn.png';
import telephone from '/src/assets/images/icons/call.png';
import mail from '/src/assets/images/icons/emaill.png';
// import { Input, Button } from 'antd';
import { Form, Input, Button } from 'antd';


const ContactApplyComponent = () => {
    const translate = useLocalization();

    const contactData = [
        {
            id: 1,
            img: location,
            list: translate('location'),
        },
        {
            id: 2,
            img: telephone,
            list: '+994 12 200 00 20',
        },
        {
            id: 3,
            img: mail,
            list: 'info@azintelecom.az',
        },
    ]

    const [form] = Form.useForm();

    return (
        <div className={css.contact}>
            <section>
                <div className="container">
                    <div className={css.contactUs}>
                        <div className={css.main}>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className={css.left}>
                                        <p className={css.title}>{translate('contact_apply')}</p>
                                        <ul>
                                            {
                                                contactData.map(item => (
                                                    <li>
                                                        <div className={css.img}>
                                                            <img src={item.img} alt={translate('img_alt')} />
                                                        </div>
                                                        <span>{item.list}</span>

                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className={css.right}>
                                        <Form
                                            form={form}
                                            name="contact_apply"
                                            layout="vertical"
                                        >
                                            <Form.Item
                                                name="fullName"
                                                className={css.fullName}
                                                rules={[{ required: true, message: translate('form_message') }]}
                                            >
                                                <Input placeholder={translate('fullName')} />
                                            </Form.Item>
                                            <div className={css.mailNumber}>
                                                <Form.Item
                                                    name="email"
                                                    rules={[
                                                        { required: true, message: translate('form_message') },
                                                        { type: 'email', message: translate('mail_message') }
                                                    ]}
                                                    className={css.mail_number}
                                                >
                                                    <Input placeholder={translate('mail')} />
                                                </Form.Item>

                                                <Form.Item
                                                    name="number"
                                                    rules={[{ required: true, message: translate('form_message') }]}
                                                    className={css.mail_number}
                                                >
                                                    <Input placeholder={translate('number')} />
                                                </Form.Item>

                                            </div>

                                            <Form.Item
                                                name="questions"
                                                rules={[{ required: true, message: translate('form_message') }]}
                                            >
                                                <Input placeholder={translate('questions')} />
                                            </Form.Item>

                                            <Form.Item>
                                                <Button type="primary" htmlType="submit">
                                                    {translate('send')}
                                                </Button>
                                            </Form.Item>
                                        </Form>
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

export default ContactApplyComponent