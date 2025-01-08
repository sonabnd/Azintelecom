import { useCallback, useState } from 'react';
import HeaderRightComponent from '../header-right/header-right.component';
import NavbarComponent from '../navbar/navbar.component';
import css from './header.module.scss';
import logo from '/src/assets/images/statics/azin logo.svg';
import LargeMenuComponent from '../large-menu/large-menu.component';
import hamburgerMenu from '/src/assets/images/icons/hamburger-menu.png';
import closeMenu from '/src/assets/images/icons/x-close.png';
import { az } from '../../../../../assets/lang/az';
import HamburgerMenuComponent from '../hamburger-menu/hamburger-menu.component';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [isMenuOpen])

  const navData = [
    {
      id: 1,
      link: az.about,
      path: '/about',
      dropdown: [
        { id: 1, name: 'Şirkət haqqında', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-1.png' },
        { id: 2, name: 'Strukturda', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-4.png' },
        { id: 3, name: 'Infosystems', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-4.png' },
        { id: 2, name: 'Strukturda', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-4.png' },

      ],
    },
    {
      id: 2,
      link: az.media,
      path: '/media',
      dropdown: [
        { id: 1, name: 'Media', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-3.png' },
        { id: 2, name: 'AzInTelecom Cloud', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-2.png' },
        { id: 3, name: 'Infosystems', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-4.png' },
        { id: 2, name: 'Strukturda', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-4.png' },
      ],
    },
    {
      id: 3,
      link: az.service,
      path: '/service',
      dropdown: [
        { id: 2, name: 'AzInTelecom Cloud', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-1.png' },
        { id: 3, name: 'Infosystems', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-3.png' },
        { id: 2, name: 'AzInTelecom Cloud', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-1.png' },
        { id: 3, name: 'Infosystems', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-3.png' },
        { id: 3, name: 'Infosystems', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-3.png' },
        { id: 3, name: 'Infosystems', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-3.png' },
      ],
    },
    {
      id: 4,
      link: az.career,
      path: '/career',
      dropdown: [
        { id: 1, name: 'Vakansiyalar', description: 'Vakansiyalar desc', icon: '/src/assets/images/icons/dropdown-icon-4.png' },
        { id: 2, name: 'Müraciət', description: 'Müraciət desc', icon: '/src/assets/images/icons/dropdown-icon-2.png' },
        { id: 3, name: 'Life', description: 'Life az desc', icon: '/src/assets/images/icons/dropdown-icon-1.png' },
      ],
    },
    {
      id: 5,
      link: az.reports,
      path: '/reports',
      dropdown: [
        { id: 1, name: 'Hesabat', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-2.png' },
        { id: 2, name: 'AzInTelecom Cloud', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-3.png' },
      ],
    },
    {
      id: 6,
      link: az.contact,
      path: '/contact',
      dropdown: [
        { id: 1, name: 'Contact', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-2.png' },
        { id: 2, name: 'AzInTelecom Cloud', description: 'A proxy for encrypting sensit...', icon: '/src/assets/images/icons/dropdown-icon-3.png' },
      ],
    },
  ];
  return (
    <>
      {isHamburgerMenu && (
        <div className={css.hamburgerMenuWrapper}>
          <HamburgerMenuComponent data={navData} />
        </div>
      )}

      <header>
        <div className={css.header}>
          <div className='container-fluid'>
            <div className={css.headerContainer}>
              <div className={css.logo}>
                <img src={logo} alt='' />
              </div>
              <div className={css.navbar}>
                <NavbarComponent data={navData} />
              </div>
              <div className={css.right}>
                <HeaderRightComponent toggleMenu={toggleMenu} />
              </div>
              <div onClick={() => { setIsHamburgerMenu(!isHamburgerMenu) }} className={css.hamburgerMenu}>
                {!isHamburgerMenu ? (
                  <img src={hamburgerMenu} alt='' onClick={() => { setIsHamburgerMenu(true) }} />
                ) : (
                  <img src={closeMenu} alt='' onClick={() => { setIsHamburgerMenu(false) }} />
                )}
              </div>
            </div>
          </div>
        </div>
        {
          isMenuOpen && (
            <div><LargeMenuComponent data={navData} closeMenu={() => setIsMenuOpen(false)} /></div>
          )
        }
      </header>
    </>
  );
};

export default HeaderComponent;
