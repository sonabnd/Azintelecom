import useLocalization from '../../../assets/lang';
import SectionTitleComponent from '../../../core/shared/section-title/section-title.component';
import css from './about-values.module.scss';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

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
];

const AboutValuesComponent = () => {
    const translate = useLocalization();

    const [leftSwiper, setLeftSwiper] = useState(null);
    const [rightSwiper, setRightSwiper] = useState(null);

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
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className={css.paginationSwiper}>
                                    <Swiper
                                        modules={[Pagination, Autoplay]}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        onSwiper={setLeftSwiper}
                                        onSlideChange={(swiper) => {
                                            if (rightSwiper) {
                                                rightSwiper.slideTo(swiper.activeIndex);
                                            }
                                        }}
                                        pagination={{
                                            clickable: true,
                                            el: `.${css.customPagination}`,
                                        }}
                                        className={css.mySwiper}
                                    >
                                        {valuesData.map((item) => (
                                            <SwiperSlide key={item.id} className={css.leftSlide}>
                                                <div className={css.left}>
                                                    <div className={css.leftTop}>
                                                        <p className={css.number}>{item.number}</p>
                                                        <p className={css.title}>{item.title}</p>
                                                        <span className={css.text}>{item.text}</span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                        <div className={css.leftBottom}>
                                            <div className={css.customPagination}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-8'>
                                    <Swiper
                                        modules={[Autoplay]}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        onSwiper={setRightSwiper}
                                        onSlideChange={(swiper) => {
                                            if (leftSwiper) {
                                                leftSwiper.slideTo(swiper.activeIndex);
                                            }
                                        }}
                                        className={css.mySwiper}
                                    >
                                        {valuesData.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className={css.right}>
                                                    <div className={css.img}>
                                                        <img
                                                            src={item.img}
                                                            alt={translate('img_alt')}
                                                        />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutValuesComponent;


