import { useCallback, useState } from 'react';
import useLocalization from '../../../../assets/lang'
import css from './actions.module.scss'
import { FaAngleRight } from "react-icons/fa6";
import backIcon from '/src/assets/images/icons/back-icon.png';

const ActionsComponent = () => {
  const translate = useLocalization();


  const actionsData = [
    {
      id: 1,
      title: 'Vətəndaş',
      text: 'Orci faucibus consequat a integer aliquet. Mi pharetra porta scelerisque',
      child: [
        {
          logo: '/src/assets/images/statics/citizen-logo1.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo2.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo1.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
      ]
    },
    {
      id: 2,
      title: 'Fərdi sahibkar',
      text: 'Orci faucibus consequat a integer aliquet. Mi pharetra porta scelerisque',
      child: [
        {
          logo: '/src/assets/images/statics/citizen-logo1.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo2.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo1.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo2.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo1.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo2.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
      ]
    },
    {
      id: 3,
      title: 'Hüquqi şəxs',
      text: 'Orci faucibus consequat a integer aliquet. Mi pharetra porta scelerisque',
      child: [
        {
          logo: '/src/assets/images/statics/citizen-logo2.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo1.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
        {
          logo: '/src/assets/images/statics/citizen-logo2.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        }
      ]
    },
    {
      id: 4,
      title: 'Dövlət qurumları',
      text: 'Orci faucibus consequat a integer aliquet. Mi pharetra porta scelerisque',
      child: [
        {
          logo: '/src/assets/images/statics/citizen-logo1.png',
          description: 'Dövlət və biznes qurumlarının elektronlaşmış xidmətləri',
        },
      ]
    },
  ]

  const [activeItem, setActiveItem] = useState(actionsData[0]);
  const [activeRight, setActiveRight] = useState(false)

  const leftItemClickFunc = useCallback((item) => {
    if (innerWidth < 991) {
      setActiveRight(true)
    }
    setActiveItem(item)
  }, [])
  return (
    <div className="container-fluid">
      <section>
        <div className={css.actions}>
          <div className="container">
            <div className={css.actionsContainer}>
              <div className={css.heading}>
                <h2>{translate('actions_heading')}</h2>
                <div className={css.lineDescription}>
                  <div className={css.headingRight}>
                    <span className={css.headingLine}></span>
                    <span className={css.description}>{translate('actions_description')}</span>
                  </div>
                </div>
              </div>
              <div style={{ flexWrap: 'nowrap' }} className="row">

                <div className={`'col-lg-5' ${activeRight ? css.nicat2 : ''}`}>
                  {actionsData.map((item) => (
                    <div
                      key={item.id}
                      className={`${css.main} ${activeItem?.id === item.id ? css.active : ''}`}
                      onMouseEnter={() => setActiveItem(item)}
                      onClick={() => leftItemClickFunc(item)}
                    >
                      <div className={css.left}>
                        <div className={css.card}>
                          <div className={css.cardInner}>
                            <p>{item.title}</p>
                            <span>{item.text}</span>
                          </div>
                          <i><FaAngleRight /></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`col-lg-7 ${css.nicat} ${activeRight ? css.visibilityRight : ''}`}
                >
                  <div className={css.right}>
                    <div className={css.close} onClick={() => { setActiveRight(false) }}>
                      <img src={backIcon} alt={translate('img_alt')} />
                      <span className={css.back}>{translate('back')}</span>
                    </div>
                    <div className={css.rightContainer}>
                      {activeItem ? (
                        activeItem.child.map((childItem, index) => (
                          <div key={index} className={css.childCard}>
                            <div>
                              <div className={css.img}>
                                <img src={childItem.logo} alt={translate('img_alt')} className={css.logo} />
                              </div>
                              <p>{childItem.description}</p>
                            </div>
                            <i><FaAngleRight /></i>
                          </div>
                        ))
                      ) : (
                        <div className={css.placeholder}>
                          <p>.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ActionsComponent

