import css from './large-menu.module.scss';
import close from '/src/assets/images/icons/x-close.png';

const LargeMenuComponent = ({ data, closeMenu }: any) => {

  return (
    <div className={css.largeMenu}>
      <div className={css.allContainer}>
        <div className={css.heading}>
          <div className={css.closeContainer} onClick={closeMenu}>
            <img src={close} alt="close" />
          </div>
        </div>
        <div className={css.menuContainer}>
          {data.map((category: any, index: number) => (
            <div key={category.id} className={css.column}>
              <p className={css.titleName}>{category.link}</p>
              <ul className={css.category}>
                {category.dropdown?.map((item: any) => (
                  <li key={item.id} className={css.dropdownItem}>
                    <div className={css.dropdownPair}>
                      <div className={css.dropdownIcon}>
                        <img src={item.icon} alt="icon" />
                      </div>
                      <div className={css.textDescription}>
                        <p className={css.dropText}>{item.name}</p>
                        <p className={css.dropDescription}>{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeMenuComponent;





