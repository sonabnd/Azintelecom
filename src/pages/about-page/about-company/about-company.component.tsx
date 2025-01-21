import css from './about-company.module.scss';
import SectionTitleComponent from '../../../core/shared/section-title/section-title.component';
import useLocalization from '../../../assets/lang';
import companyImg from '/src/assets/images/statics/company-img.png';

const AboutCompanyComponent = () => {
  const translate = useLocalization();
  const companyData = [
    {
      img: companyImg,
      text: translate('company_text')
    }
  ]
  return (
    <div className='section'>
      <div className={css.company}>
        <div className='container'>
          <div className={css.companyName}>
            <SectionTitleComponent
            title={translate('company_name')} 
            description={translate('company_description')} 
            forTitle={css.forTitle}
            forDescription={css.forDescription}
            />
          </div>
          <div className='row'>
            {
              companyData.map(item => (
                <>
                  <div className='col-lg-7'>
                    <div className={css.left}>
                        <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className='col-lg-5'>
                    <div className={css.right}>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompanyComponent