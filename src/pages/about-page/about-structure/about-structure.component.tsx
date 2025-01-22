import { useCallback, useEffect, useState } from 'react';
import useLocalization from '../../../assets/lang';
import css from './about-structure.module.scss';
import SectionTitleComponent from '../../../core/shared/section-title/section-title.component';
import close from '/src/assets/images/statics/details-close.png';
import linkedin from '/src/assets/images/icons/LinkedIn.png';
import message from '/src/assets/images/icons/email notification.png';

const AboutStructureComponent = () => {
  const translate = useLocalization();

  const structureData = [
    {
      id: 1,
      name: translate('structure_name1'),
      description: translate('structure_description1'),
      img: '/src/assets/images/statics/Elkhan Azizov-img.jpg',
      nameDetails: translate('structure_details1'),
      dateOfBirth: '07.05.1991',
      mail: 'elkhan.azizov@azintelecom.az'
    },
    {
      id: 2,
      name: translate('structure_name2'),
      description: translate('structure_description2'),
      img: '/src/assets/images/statics/img-Samad Seyidov.png',
      nameDetails: translate('structure_details2'),
      dateOfBirth: '07.05.1991',
      mail: 'elkhan.azizov@azintelecom.az'
    },
    {
      id: 3,
      name: translate('structure_name3'),
      description: translate('structure_description3'),
      img: '/src/assets/images/statics/img-Altay Ismayılov.jpg',
      nameDetails: translate('structure_details3'),
      dateOfBirth: '07.05.1991',
      mail: 'elkhan.azizov@azintelecom.az'
    },
    {
      id: 4,
      name: translate('structure_name4'),
      description: translate('structure_description4'),
      img: '/src/assets/images/statics/Ruslan Dadayev-img.jpg',
      nameDetails: translate('structure_details4'),
      dateOfBirth: '07.05.1991',
      mail: 'elkhan.azizov@azintelecom.az'
    },
    {
      id: 5,
      name: translate('structure_name5'),
      description: translate('structure_description5'),
      img: '/src/assets/images/statics/img-Altay Ismayılov.jpg',
      nameDetails: translate('structure_details5'),
      dateOfBirth: '07.05.1991',
      mail: 'elkhan.azizov@azintelecom.az'
    },
    {
      id: 6,
      name: translate('structure_name6'),
      description: translate('structure_description6'),
      img: '/src/assets/images/statics/img-Samad Seyidov.png',
      nameDetails: translate('structure_details6'),
      dateOfBirth: '07.05.1991',
      mail: 'elkhan.azizov@azintelecom.az'
    },
    {
      id: 7,
      name: translate('structure_name7'),
      description: translate('structure_description7'),
      img: '/src/assets/images/statics/img-Altay Ismayılov.jpg',
      nameDetails: translate('structure_details7'),
      dateOfBirth: '07.05.1991',
      mail: 'elkhan.azizov@azintelecom.az'
    },
    {
      id: 8,
      name: translate('structure_name8'),
      description: translate('structure_description8'),
      img: '/src/assets/images/statics/Ruslan Dadayev-img.jpg',
      nameDetails: translate('structure_details8'),
      dateOfBirth: '07.05.1991',
      mail: 'elkhan.azizov@azintelecom.az'
    },
  ]

  const [isActive, setIsActive] = useState(structureData[0])
  const [detailsActive, setDetailsActive] = useState('')

  const itemDetailsFunc = useCallback((item) => {
    setDetailsActive(item);
  }, [])
  
  useEffect(() => {

    if (detailsActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [detailsActive]);

  return (
    <div className='section'>
      <div className={css.structure}>
        <section>
          <div className='container'>
            <div className={css.structureContainer}>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className={css.heading}>
                    <SectionTitleComponent 
                    title={translate('about_structure')}
                    description={translate('about_structure_description')}
                    forTitle={css.forTitle}
                    forDescription={css.forDescription}
                    />
                  </div>
                  <div className={css.nameList}>
                    {
                      structureData.map(item => (
                        <div
                          className={css.listItem}
                          onClick={() => itemDetailsFunc(item)}
                          onMouseEnter={()=> setIsActive(item)}
                        >
                          <p className={css.name}>{item.name}</p>
                          <span className={css.description}>{item.description}</span>
                        </div>

                      ))
                    }
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className={css.imgContainer}>
                    {
                      isActive && (
                        <div className={css.img}>
                          <img src={isActive.img} alt="" />
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
              {
                detailsActive && (
                  <div className={css.structureDetails}>
                      <div className={css.details}>
                        <div className={css.detailsHeading}>
                          <div className={css.close} onClick={() => setDetailsActive(false)}>
                            <img src={close} alt={translate('img_alt')} />
                          </div>
                        </div>
                        <div className='row' style={{margin: 0}}>
                            <div className='col-lg-6' style={{padding: 0}}>
                              <div className={css.img}>
                                <img src={detailsActive.img} alt={translate('img_alt')} />
                              </div>
                            </div>
                            <div className='col-lg-6' style={{padding: 0}}>
                              <div className={css.detailsRight}>
                                <SectionTitleComponent 
                                title={detailsActive.name} 
                                description={detailsActive.description}
                                forTitle={css.detailsFullName}
                                forDescription={css.detailsPosition}
                                />
                                <div className={css.birthOfDay}>
                                  <span className={css.birthText}>{translate('birthday')}</span>
                                  <span className={css.birthDate}>{detailsActive.dateOfBirth}</span>
                                </div>
                                <p className={css.detailsDescription}>{detailsActive.nameDetails}</p>
                                <div className={css.contact}>
                                  <img className={css.linkedin} src={linkedin} alt={translate('img_alt')} />
                                  <div className={css.contactLine}></div>
                                  <img className={css.message} src={message} alt={translate('img_alt')} />
                                  <p className={css.mailAdress}>{detailsActive.mail}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                )
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutStructureComponent