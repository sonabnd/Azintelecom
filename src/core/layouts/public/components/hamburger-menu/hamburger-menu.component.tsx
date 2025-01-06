import { useCallback, useState } from 'react';
import css from './hamburger-menu.module.scss'
import { FaAngleRight } from "react-icons/fa6";

const HamburgerMenuComponent = ({ data }: any) => {
  const [activeItem, setActiveItem] = useState(false);
  const [activeDescription, setActiveDescription] = useState(null);

  const listItemFunc = useCallback((item, index) => (
    setActiveItem(true),
    setActiveDescription(activeDescription == index ? null : index)
  ), [])

  return (
    <div className={css.hamburgerMenu}>
      {activeItem ? (
        <div className={css.activeContainer}>
          <div>
            <ul>
              {data.map((list, index) =>
                activeDescription === index ? (
                  <li key={list.id}>
                    <p className={css.listName}>{list.link}</p>
                    {list.dropdown.map((listItem) => (
                      <li
                        key={listItem.id}
                        className={css.dropdownItem}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className={css.dropdownPair}>
                          <div className={css.dropdownIcon}>
                            <img src={listItem.icon} alt="img" />
                          </div>
                          <div className={css.textDescription}>
                            <p className={css.dropText}>{listItem.name}</p>
                            <p className={css.dropDescription}>
                              {listItem.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      ) : (
        <ul className={css.list}>
          {data.map((item, index) => (
            <li
              className={css.listItem}
              key={item.id}
              onClick={() => listItemFunc(item,index)}
            >
              <div className={css.pair}>
                <p className={css.title}>{item.link}</p>
                <div className={css.description}>
                  {item.dropdown.map((description) => (
                    <span
                      className={css.descriptionText}
                      key={description.id}
                    >
                      {description.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
              <i>
                <FaAngleRight />
              </i>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenuComponent;