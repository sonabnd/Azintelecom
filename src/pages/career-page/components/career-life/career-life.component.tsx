import { useCallback, useRef } from 'react';
import useLocalization from '../../../../assets/lang'
import css from './career-life.module.scss'
import left from '/src/assets/images/icons/navigate-left.png';
import right from '/src/assets/images/icons/navigate-right.png';
import goTo from '/src/assets/images/icons/useful-goTo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";
import img1 from '/src/assets/images/statics/life-img1.png';
import img2 from '/src/assets/images/statics/life-img2.png';
import img3 from '/src/assets/images/statics/life-img3.png';
import img4 from '/src/assets/images/statics/life-img4.png';
import { Link } from 'react-router-dom';

const CareerLifeComponent = () => {
  const translate = useLocalization();
  const swiperRef = useRef(null);
  const lifeData = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img1,
    },
    {
      id: 6,
      img: img2,
    },
    {
      id: 7,
      img: img3,
    },
    {
      id: 8,
      img: img4,
    },
  ];
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
    <div className={css.career}>
      <section>
        <div className='container'>
          <div className={css.life}>
            <div className={css.heading}>
              <h2>{translate('career_life_title')}</h2>
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
                    modules={[Navigation]}
                    ref={swiperRef}
                    className={css.mySwiper}
                    breakpoints={{
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                      991: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                    }}
                  >
                    {lifeData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className={css.card} >
                          <div className={css.cardInner}>
                            <img src={item.img} alt={translate('img_alt')} />
                            <div className={css.goTo}>
                              <Link to={'https://www.linkedin.com/company/azintelecom-llc/posts/?feedView=all'}>{translate('linkedin')}</Link>
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
      </section>
    </div>
  )
}

export default CareerLifeComponent