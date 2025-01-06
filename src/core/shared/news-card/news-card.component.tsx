import useLocalization from '../../../assets/lang';
import css from './news.card.module.scss';
import news1 from '/src/assets/images/statics/news-1.jpeg';
import news2 from '/src/assets/images/statics/news-2.png';
import news3 from '/src/assets/images/statics/news-3.png';
import news4 from '/src/assets/images/statics/news-4.png';

const NewsCardComponent = ({ item, isLeft }) => {
  const translate = useLocalization();

  const newsData = [
    {
      id: 1,
      img: news1,
      date: translate('news_card_date'),
      text: translate('news_card_text1'),
    },
    {
      id: 2,
      img: news2,
      date: translate('news_card_date'),
      text: translate('news_card_text2'),
    },
    {
      id: 3,
      img: news3,
      date: translate('news_card_date'),
      text: translate('news_card_text2'),
    },
    {
      id: 4,
      img: news4,
      date: translate('news_card_date'),
      text: translate('news_card_text2'),
    },
  ]

  return (
    <div className={css.newsCard}>
      <div className={css.img}>
        {/* img will come after mapping */}
        <img src='' alt={translate('img_alt')} />
      </div>
      <div className={css.description}>
        <div className={css.heading}>
          {/* standard text: */}
          <span>Xeberler</span>
          {/* data will come after mapping */}
          <span></span>
        </div>
        {/* text will come after mapping */}
        <p></p>
      </div>
    </div>
  );
}

export default NewsCardComponent