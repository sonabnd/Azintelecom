import facebook from '/src/assets/images/icons/Facebook Icon.png';
import instagram from '/src/assets/images/icons/Instagram Icon.png';
import linkedin from '/src/assets/images/icons/linkedIn Icon.png';
import css from './footer-social.module.scss';
import useLocalization from '../../../../../assets/lang';

const SocialComponent = () => {
  const translate = useLocalization();
  const social = [
    {
      id: 1,
      icon: facebook,
      url: 'https://www.facebook.com/',
    },
    {
      id: 2,
      icon: instagram,
      url: 'https://www.instagram.com/',
    },
    {
      id: 3,
      icon: linkedin,
      url: 'https://www.linkedin.com/',
    },
  ];
  return (
    <div className={css.social}>
      {social.map((item) => (
        <div className={css.img} key={item.id}>
          <a href={item.url} target='_blank'>
            <img src={item.icon} alt={translate('img_alt')} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialComponent;
