import css from './footer-location.module.scss'
import location from '/src/assets/images/icons/Location.png';
import telephone from '/src/assets/images/icons/Calling.png';
import useLocalization from '../../../../../assets/lang';

const LocationComponent = () => {
    const translate = useLocalization();
    const locationData = [
        {
            id: 1,
            icon: location,
            text: 'Azərbaycan, Bakı şəhəri, Nizami rayonu, Əlibəy Hüseynzadə küç., 74',
        },
        {
            id: 2,
            icon: telephone,
            text: '+994  12  200  00  20',
        },
    ]
  return (
    <div className={css.location}>
        {
            locationData.map(item => (
                <div className={css.paragraph} key={item.id}>
                    <div className={css.inner}>
                        <img src={item.icon} alt={translate('img_alt')} />
                        <span>{item.text}</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default LocationComponent