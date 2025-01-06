import useLocalization from '../../../../../assets/lang';
import css from './useful-links.module.scss';
import left from '/src/assets/images/icons/navigate-left.png';
import right from '/src/assets/images/icons/navigate-right.png';
import goTo from '/src/assets/images/icons/useful-goTo.png';
import React, { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from "swiper/modules";

const UsefulLinksComponent = () => {
    const linkData = [
        {
            id: 1,
            logo: '/src/assets/images/statics/useful_logo 1.png',
            heading: 'Azərbaycan Respublikasının Prezidenti İlham Əliyev',
            link: 'president.az',
        },
        {
            id: 2,
            logo: '/src/assets/images/statics/useful_logo 2.png',
            heading: 'Heydər Əliyev Fondu',
            link: 'heydar-aliyev-foundation.org',
        },
        {
            id: 3,
            logo: '/src/assets/images/statics/useful_logo 3.png',
            heading:
                'Virtual Qarabağ İnformasiya-Kommunikasiya Texnologiyaları Mərkəzi',
            link: 'virtualkarabakh.az',
        },
        {
            id: 4,
            logo: '/src/assets/images/statics/useful_logo 1.png',
            heading: 'Azərbaycan Respublikasının Prezidenti İlham Əliyev',
            link: 'president.az',
        },
        {
            id: 5,
            logo: '/src/assets/images/statics/useful_logo 2.png',
            heading: 'Heydər Əliyev Fondu',
            link: 'heydar-aliyev-foundation.org',
        },
        {
            id: 6,
            logo: '/src/assets/images/statics/useful_logo 3.png',
            heading:
                'Virtual Qarabağ İnformasiya-Kommunikasiya Texnologiyaları Mərkəzi',
            link: 'virtualkarabakh.az',
        },
    ];
    const translate = useLocalization();
    const swiperRef = useRef(null);
    
    const handleNextClick = useCallback(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    }, [])
  
    const handlePrevClick = useCallback(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slidePrev();
      };
    }, [])
    return (
        <div>
            <div>
                <div className={css.inner}>
                    <div className={css.heading}>
                        <h2>{translate('useful_links')}</h2>
                        <div className={css.navigation}>
                            <div className={css.left} onClick={handlePrevClick}>
                                <img src={left} alt={'img_alt'} />
                            </div>
                            <div className={css.right} onClick={handleNextClick}>
                                <img src={right} alt={'img_alt'} />
                            </div>
                        </div>
                    </div>
                    <div className={css.linksBottom}>
                        <div className={css.links}>
                            <div className={css.linkContainer}>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={24}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[ Navigation]}
                                    ref={swiperRef}
                                    className={css.mySwiper}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 24
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        575: {
                                            slidesPerView: 1.8,
                                            spaceBetween: 18,
                                        },
                                        0: {
                                            slidesPerView: 1.3,
                                            spaceBetween: 15,
                                        },
                                    }}
                                >
                                    {linkData.map((item, index) => (
                                        <SwiperSlide key={item.id}>
                                            <div className={css.card} >
                                                <div className={css.cardInner}>
                                                    <div className={css.logoTitle}>
                                                        <div className={css.logo}>
                                                            <img src={item.logo} alt={translate('img_alt')} />
                                                        </div>
                                                        <p>{item.heading}</p>
                                                    </div>
                                                    <div className={css.goTo}>
                                                        <span>{item.link}</span>
                                                        <img src={goTo} alt={translate('img_alt')} />
                                                    </div>
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
        </div>
    );
};

export default UsefulLinksComponent;
