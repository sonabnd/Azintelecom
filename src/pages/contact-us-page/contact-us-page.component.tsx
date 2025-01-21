import ContactApplyComponent from './components/contact-apply/contact-apply.component';
import ContactInformationComponent from './components/contact-information/contact-information.component';
import ContactIntroductionComponent from './components/contact-introduction/contact-introduction.component';
import ContactMapComponent from './components/contact-map/contact-map.component';
import ContactScheduleComponent from './components/contact-schedule/contact-schedule.component';
import css from './contact-us-page.module.scss';

const ContactUsComponent = () => {
  return (
    <div>
            <div className='container-fluid'>
                <div className={css.sectionPart}>
                  <ContactIntroductionComponent/>
                  <ContactApplyComponent/>
                  <ContactInformationComponent/>
                  <ContactScheduleComponent/>
                  <ContactMapComponent/>
                </div>
            </div>
        </div>
  )
}

export default ContactUsComponent