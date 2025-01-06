import useLocalization from '../../../../assets/lang';
import css from './projects.module.scss';
import imgBg from '/src/assets/images/statics/projects-bg-img.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useCallback, useRef } from 'react';
import { FaAngleRight } from "react-icons/fa6";

const ProjectsComponent = () => {
    const translate = useLocalization();
    const swiperRef = useRef(null)
    const projectsData = [
        {
            id: 1,
            title: '“AzInTelecom” MMC jurnalistlər üçün təlim keçirdi',
            date: '04 Aprel 2023',
            category: 'Rəqəmsal dünya',
            img: '',
        },
        {
            id: 2,
            title: '““AzInTelecom”un nümayəndələri “GITEX Global 2023” sərgisində',
            date: '04 Aprel 2023',
            category: 'Süni intellekt',
            img: '',
        },
        {
            id: 3,
            title: '“AzInTelecom-un “Hökumət buludu” layihəsi beynəlxalq müsabiqədə çempion olubssssss dfghujikjhgfdfghj',
            date: '04 Aprel 2023',
            category: 'İnformasiya',
            img: '',
        },
        {
            id: 4,
            title: '“AzInTelecom” MMC jurnalistlər üçün təlim keçirdi',
            date: '04 Aprel 2023',
            category: 'Rəqəmsal dünya',
            img: '',
        },
        {
            id: 5,
            title: '“AzInTelecom” MMC jurnalistlər üçün təlim keçirdi',
            date: '04 Aprel 2023',
            category: 'Rəqəmsal dünya',
            img: '',
        },
        {
            id: 6,
            title: '“AzInTelecom” MMC jurnalistlər üçün təlim keçirdi',
            date: '04 Aprel 2023',
            category: 'Rəqəmsal dünya',
            img: '',
        }
    ]

    const handlePrevClick = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        };
    }, []);

    const handleNextClick = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    }, [])

    return (
        <div className='container-fluid'>
            <section>
                <div className={css.projects}>
                    <div className='container'>
                        <div className={css.intro}>
                            <div className={css.heading}>
                                <h2>{translate('projects_heading')}</h2>
                                <div className={css.headingRight}>
                                    <div className={css.mobileLine}></div>
                                    <span>{translate('projects_goTo')}</span>
                                    <i><FaAngleRight /></i>
                                </div>
                            </div>
                            <div className={css.mobileSlider}>
                                        {
                                            projectsData.map(item => (
                                                <div className={css.mobileCard} key={item.id}>
                                                        <div className={css.innerCard}>
                                                            <p>{item.title}</p>
                                                            <div className={css.dateCategory}>
                                                                <div className={css.date}>
                                                                    {item.date}
                                                                </div>
                                                                <div className={css.category}>
                                                                    {item.category}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <i><FaAngleRight /></i>
                                                </div>
                                            ))
                                        }
                                </div>
                            <div className={css.main}>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className={css.leftSide}>
                                            <img src={imgBg} alt={translate('img_alt')} />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className={css.rightSide}>
                                            <p>{translate('projects_text')}</p>
                                            <div className={css.paginationNavigation}>
                                                <div className={css.customPagination}></div>
                                                <div className={css.navigation}>
                                                    <i onClick={handlePrevClick}><HiOutlineArrowLeft /></i>
                                                    <i onClick={handleNextClick}><HiOutlineArrowRight /></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.slider}>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        pagination={{
                                            clickable: true,
                                            el: `.${css.customPagination}`,
                                        }}
                                        modules={[Pagination, Navigation]}
                                        navigation={false}
                                        ref={swiperRef}
                                        className={css.mySwiper}
                                    >
                                        {
                                            projectsData.map(item => (
                                                <SwiperSlide className={css.projectCard}>
                                                    <div className={css.card}>
                                                        <div className={css.innerCard}>
                                                            <p className={css.itemTitle}>{item.title}</p>
                                                            <div className={css.dateCategory}>
                                                                <div className={css.date}>
                                                                    {item.date}
                                                                </div>
                                                                <div className={css.category}>
                                                                    {item.category}
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectsComponent