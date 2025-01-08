import css from './navbar.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';

const NavbarComponent = ({ data }: any) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const handleDropdown = useCallback(
    (index: any) => {
      setActiveDropdown(activeDropdown === index ? null : index);
    },
    [activeDropdown]
  );

  const chunkArray = (array: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={css.navbar} ref={dropdownRef}>
      <div className={css.navbarContainer}>
        <nav>
          <ul className={css.navList}>
            {data.map((item, index) => (
              <div
                className={css.navListContainer}
                key={item.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <li
                  onClick={() => handleDropdown(index)}
                  className={`${css.navItem} ${
                    activeDropdown === index ? css.activeNavItem : ''
                  }`}
                >
                  <div className={css.dropdown}>
                    <div>
                      <p>{item.link}</p>
                      {activeDropdown === index && (
                        <div>
                          <ul className={css.dropdownContainer}>
                            {chunkArray(item.dropdown, 3).map(
                              (chunk, chunkIndex) => (
                                <div
                                  key={chunkIndex}
                                  className={css.dropdownRow}
                                >
                                  {chunk.map((dropdown) => (
                                    <li
                                      key={dropdown.id}
                                      className={css.dropdownItem}
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <div className={css.dropdownPair}>
                                        <div className={css.dropdownIcon}>
                                          <img src={dropdown.icon} alt='img' />
                                        </div>
                                        <div className={css.textDescription}>
                                          <p className={css.dropText}>
                                            {dropdown.name}
                                          </p>
                                          <p className={css.dropDescription}>
                                            {dropdown.description}
                                          </p>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </div>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
                {hoveredIndex === index && (
                  <div className={css.activeCircle}></div>
                )}
                {activeDropdown === index && (
                  <div className={css.activeCircle}></div>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
