import useLocalization from '../../../assets/lang'
import SectionTitleComponent from '../../../core/shared/section-title/section-title.component'
import css from './about-component.module.scss'

import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
// import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';
const valuesData = [
    {
        id: 1,
        number: '01',
        title: 'FAKT',
        text: 'IER III, ISO 20000, ISO 22301 və ISO 27001 sertifikatlı əlçatanlıq zonalarında 24/7 rejimində texniki dəstəyin göstərilməsi.',
        img: '/src/assets/images/statics/values-slider-1.jpeg',
    },
    {
        id: 2,
        number: '02',
        title: 'FAKT',
        text: 'iki dəstəyin göstərilməsi.',
        img: '/src/assets/images/statics/values-slider-2.jpeg',
    },
    {
        id: 3,
        number: '03',
        title: 'AKT',
        text: 'IER III, ISO 20000, ISO 22301 və ISO 27001',
        img: '/src/assets/images/statics/values-slider-3.jpeg',
    },
    {
        id: 4,
        number: '04',
        title: 'T',
        text: 'ISO 22301 və ISO 27001',
        img: '/src/assets/images/statics/values-slider-2.jpeg',
    },
]
const AboutValuesComponent = () => {
    const translate = useLocalization();
  return (
    <div className={css.sectionContainer}>
        <section>
            <div className='container'>
                <div className={css.values}>
                    <div className={css.heading}>
                        <SectionTitleComponent
                        title={translate('values_title')}
                        description={translate('values_description')}
                        forTitle={css.forTitle}
                        forDescription={css.forDescription}
                        />
                    </div>
                    <div className={css.main}>
                    <Swiper 
                    // pagination={true} 
                    // modules={[Pagination]} 
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className={css.mySwiper}
                    >
                        {
                            valuesData.map((item,index) => (
                                <SwiperSlide key={item.id}>
                                    <div className={css.slider}>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className={css.left}>
                                                    <div className={css.leftTop}>
                                                        <p className={css.number}>{item.number}</p>
                                                        <p className={css.title}>{item.title}</p>
                                                        <span className={css.text}>{item.text}</span>
                                                    </div>
                                                    <div className={css.leftBottom}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className={css.right}>
                                                    <div className={css.img}>
                                                        <img src={item.img} alt={translate('img_alt')} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutValuesComponent