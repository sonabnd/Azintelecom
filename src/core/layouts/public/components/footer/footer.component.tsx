import useLocalization from '../../../../../assets/lang';
import { enviroment } from '../../../../configs/app.config';
import ContactUsComponent from '../footer-contact-us/footer-contact-us.component';
import LocationComponent from '../footer-location/footer-location.component';
import SocialComponent from '../footer-social/footer-social.component';
import UsefulLinksComponent from '../useful-links/useful-links.component'
import css from './footer.module.scss';

const FooterComponent = () => {
  const translate = useLocalization();
  const date = new Date().getFullYear();
  const projectName = enviroment.applicationName;
  const footerList = [
    {
      id: 1,
      name: translate('main')
    },
    {
      id: 2,
      name: translate('about')
    },
    {
      id: 3,
      name: translate('service')
    },
    {
      id: 4,
      name: translate('media')
    },
    {
      id: 5,
      name: translate('career')
    },
    {
      id: 6,
      name: translate('reports')
    },
    {
      id: 7,
      name: translate('contact')
    },
  ]

  const chunkArray = (array: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };
  return (
    <footer>
      <div className={css.allContainer}>
        <div className='container-fluid'>
          <div className={css.footer}>
              <div className={css.top}>
                <UsefulLinksComponent />
              </div>
            <div className={css.bottom}>
              <div className='container'>
                <div className={css.bottomContainer}>
                  <div className={css.bottomInner}>
                    <div className={css.heading}>
                      <h2>{translate('footer_heading')}</h2>
                    </div>
                    <div className={css.main}>
                      <div className={css.innerMain}>
                        <div className={css.footerList}>
                          {chunkArray(footerList, 4).map((chunk) => (
                            <ul className={css.list}>
                              {chunk.map((list) => (
                                <li key={list.id} >{list.name}</li>
                              ))}
                            </ul>
                            ))}
                        </div>
                        <div className={css.locationContact}>
                          <div className={css.location}>
                            <LocationComponent />
                          </div>
                          <div className={css.contactSocial}>
                            <div className={css.contact}><ContactUsComponent /></div>
                            <div className={css.social}><SocialComponent /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={css.mobileSocial}>
                      <SocialComponent/>
                    </div>
                    <div className={css.author}>
                      <div className={css.left}>
                        <span> {date} © {projectName}.{translate('author_text')}</span>
                      </div>
                      <div className={css.right}>
                        <span>{translate('site')}</span>
                        <span className={css.projectName}>{projectName} MMC</span>
                        <span>{translate('site_by')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default FooterComponent