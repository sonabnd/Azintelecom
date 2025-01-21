import { useState } from 'react';
import useLocalization from '../../../assets/lang'
import SectionTitleComponent from '../../../core/shared/section-title/section-title.component'
import css from './about-success.module.scss'
import arrowRight from '/src/assets/images/icons/arrow-narrow-right.png';
import arrowTopRight from '/src/assets/images/icons/topRight.png';
import itemImg from '/src/assets/images/statics/about-global-img.jpeg';
import classNames from 'classnames';

const AboutSucessComponent = () => {
    const translate = useLocalization();
    const successData = [
        {
            id: 1,
            text: translate('success_text1'),
            date: translate('success_date1'),
            category: translate('success_categories1'),
            img: itemImg,
        },
        {
            id: 2,
            text: translate('success_text2'),
            date: translate('success_date2'),
            category: translate('success_categories2'),
            img: itemImg,
        },
        {
            id: 3,
            text: translate('success_text3'),
            date: translate('success_date3'),
            category: translate('success_categories3'),
            img: itemImg,
        },
        {
            id: 4,
            text: translate('success_text4'),
            date: translate('success_date4'),
            category: translate('success_categories4'),
            img: itemImg,
        },
        {
            id: 5,
            text: translate('success_text1'),
            date: translate('success_date1'),
            category: translate('success_categories1'),
            img: itemImg,
        },
        {
            id: 6,
            text: translate('success_text2'),
            date: translate('success_date2'),
            category: translate('success_categories2'),
            img: itemImg,
        },
        {
            id: 7,
            text: translate('success_text3'),
            date: translate('success_date3'),
            category: translate('success_categories3'),
            img: itemImg,
        },
        {
            id: 8,
            text: translate('success_text4'),
            date: translate('success_date4'),
            category: translate('success_categories4'),
            img: itemImg,
        },
    ]
    const [isActiveItem, setIsActiveItem] = useState(null)
    
  return (
    <div className={css.success}>
        <section>
            <div className='container'>
                <div className={css.successContainer}>
                    <div className={css.heading}>
                        <SectionTitleComponent
                        title={translate('success_title')}
                        description={translate('success_description')}
                        forTitle ={css.forTitle}
                        forDescription ={css.forDescription}
                        />
                    </div>
                    <div className={css.successList}>
                        {
                            successData.map(item => (
                                <div className={css.listItem} key={item.id}
                                onMouseEnter={()=>setIsActiveItem(item.id)}
                                onMouseLeave={()=>setIsActiveItem(null)}
                                >
                                    <div className='row'>
                                        <div className='col-10 col-lg-7'>
                                            <div className={css.itemLeft}>
                                                <p className={css.text}>{item.text}</p>
                                                <div className={css.dateCategory}>
                                                    <div className={css.date}>{item.date}</div>
                                                    <div className={css.category}>{item.category}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-2 col-lg-5'>
                                            <div className={css.itemRight}>
                                                <div>
                                                    <div className={css.img}>
                                                        <img 
                                                        className={isActiveItem === item.id ? css.active : ''} 
                                                        src={item.img} alt={translate('img_alt')}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                    className={classNames(css.arrow, {
                                                        [css.active]: isActiveItem === item.id,
                                                    })}
                                                    >
                                                        {
                                                            isActiveItem === item.id ? (
                                                                <img src={arrowTopRight} className={css.arrowTopRight} alt={translate('img_alt')} />
                                                            ) :
                                                            <img src={arrowRight} alt={translate('img_alt')} />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
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

export default AboutSucessComponent