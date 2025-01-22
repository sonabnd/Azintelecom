import useLocalization from '../../../../assets/lang';
import css from './apply-vacancy.module.scss';
import telephoneIcon from '/src/assets/images/icons/telephone-icon.png';
import mailIcon from '/src/assets/images/icons/mail-icon.png';
import locationIcon from '/src/assets/images/icons/location-icon.png';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ApplyVacancyComponent = () => {
    const translate = useLocalization();
    const contactData= [
        {
            id: 1,
            img: telephoneIcon,
            text: '+(994) 12 200 00 20',
        },
        {
            id: 2,
            img: mailIcon,
            text: 'info@azintelecom.az',
        },
        {
            id: 3,
            img: locationIcon,
            text: translate('location'),
        },
    ]

    const uploadProps = {
        beforeUpload: (file) => {
            console.log(file); // Fayl yükləməzdən əvvəl işlənən funksiya
            return false; // Faylın dərhal serverə yüklənməməsi üçün
        },
    };

    return (
        <div className={css.career}>
            <div className='container'>
                <div className={css.applyVacancy}>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <div className={css.left}>
                                <p className={css.text}>{translate('apply_vacancy_text')}</p>
                                <span className={css.description}>{translate('apply_vacancy_description')}</span>
                                <div className={css.file}>
                                    <label className={css.fileUpload}  htmlFor="file-upload">Faylı yükləyin...</label>
                                    <input style={{display:'none'}} id='file-upload' type="file" placeholder={translate('apply_vacancy_placeholder')} />
                                    {/* <Upload {...uploadProps} className={css.fileUpload}>
                                        <Button className={css.uploadButton}>
                                            Fayl yukle.
                                        </Button>
                                    </Upload> */}
                                    <button>{translate('send_cv')}</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className={css.right}>
                                <ul className={css.contactList}>
                                {
                                    contactData.map(item => (
                                        <li key={item.id} className={css.contactItem}>
                                            <img src={item.img} alt={translate('img_alt')} />
                                            <span className={css.rightText}>{item.text}</span>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyVacancyComponent