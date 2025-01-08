import useLocalization from '../../../../assets/lang';
import css from './news.module.scss';
import news1 from '/src/assets/images/statics/news-1.jpeg';
import news2 from '/src/assets/images/statics/news-2.png';
import news3 from '/src/assets/images/statics/news-3.png';
import news4 from '/src/assets/images/statics/news-4.png';
import { FaAngleRight } from "react-icons/fa6";


const NewsComponent = () => {
    const translate = useLocalization();
    const newsData = [
        { id: 1, img: news1, date: translate('news_card_date'), text: translate('news_card_text1') },
        { id: 2, img: news4, date: translate('news_card_date'), text: translate('news_card_text2') },
        { id: 3, img: news3, date: translate('news_card_date'), text: translate('news_card_text2') },
        { id: 4, img: news4, date: translate('news_card_date'), text: translate('news_card_text2') },
        { id: 5, img: news1, date: translate('news_card_date'), text: translate('news_card_text2') },
        { id: 6, img: news2, date: translate('news_card_date'), text: translate('news_card_text2') },
    ];

    return (
        <div className="container-fluid">
            <div className={css.newsContainer}>
                <section>
                    <div className="container">
                        <div className={css.news}>
                            <div className={css.header}>
                                <h2>{translate('news_heading')}</h2>
                                <div className={css.headingRight}>
                                    <div className={css.mobileLine}></div>
                                    <span className={css.goTo}>{translate('news_goTo')}</span>
                                    <i><FaAngleRight /></i>
                                </div>
                            </div>
                            <div className={css.main}>
                                <div className={css.leftCard}>
                                    <div className={css.newsCard}>
                                        <div className={css.img}>
                                            <img src={newsData[0].img} alt={translate('img_alt')} />
                                        </div>
                                        <div className={css.description}>
                                            <div className={css.heading}>
                                                <span className={css.newsText}>{translate('news_heading')}</span>
                                                <span className={css.newsDate}>{newsData[0].date}</span>
                                            </div>
                                            <p>{newsData[0].text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.rightCards}>
                                    {newsData.slice(1, 4).map((news) => (
                                        <div key={news.id} className={css.newsCard}>
                                            <div className={css.img}>
                                                <img src={news.img} alt={translate('img_alt')} />
                                            </div>
                                            <div className={css.description}>
                                                <div className={css.heading}>
                                                    <span className={css.newsText}>{translate('news_heading')}</span>
                                                    <span className={css.newsDate}>{news.date}</span>
                                                </div>
                                                <p>{news.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default NewsComponent;


