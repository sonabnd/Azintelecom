import useLocalization from '../../../../assets/lang';
import css from './advantages.module.scss';

const AdvantagesComponent = () => {
  const translate = useLocalization();
  const advantageData = [
    {
      id: 1,
      icon: '/src/assets/images/icons/advantage-icon-1.png',
      title: 'Təcrübə',
      text: 'Azərbaycan Respublikasının vətəndaşları üçün SİMA İMZA və SİMA Token məhsulunu qarşılayın',
    },
    {
      id: 2,
      icon: '/src/assets/images/icons/advantage-icon-2.png',
      title: 'İnnovasiya',
      text: 'Azərbaycan Respublikasının vətəndaşları üçün SİMA İMZA və SİMA Token məhsulunu qarşılayın',
    },
    {
      id: 3,
      icon: '/src/assets/images/icons/advantage-icon-3.png',
      title: 'Biometrik identifikasiya',
      text: 'Azərbaycan Respublikasının vətəndaşları üçün SİMA İMZA və SİMA Token məhsulunu qarşılayın',
    },
    {
      id: 4,
      icon: '/src/assets/images/icons/advantage-icon-4.png',
      title: 'Təhlükəsizlik',
      text: 'Azərbaycan Respublikasının vətəndaşları üçün SİMA İMZA və SİMA Token məhsulunu qarşılayın',
    },
  ];

  return (
    <div className='container-fluid'>
      <section>
        <div className={css.advantages}>
          <div className={css.advantagesContainer}>
            <div className={css.headerRow}>
              <div className='container'>
                <div className={css.leftRight}>
                  <h2>{translate('advantages_heading')}</h2>
                  <p>{translate('advantages_text')}</p>
                </div>
              </div>
            </div>
            <div className={css.advantagesBottom}>
              <div className={css.rowContainer}>
                <div className='row' style={{margin: '0', flexWrap: 'nowrap'}}>
                  {advantageData.map((item) => (
                    <div className={`col-lg-3 ${css.boxContainer}`} key={item.id} style={{padding: '0'}}>
                      <div className={css.box}>
                        <div className={css.inner}>
                          <div className={css.img}>
                            <img src={item.icon} alt={translate('icon_alt')} />
                          </div>
                          <h3 className={css.boxTitle}>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvantagesComponent;
