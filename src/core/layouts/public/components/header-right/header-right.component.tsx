import { useDispatch } from 'react-redux';
import { ILanguages } from '../../../../../store/store'
import { useStore } from '../../../../../store/store.config'
import css from './header-right.module.scss'
import { useCallback, useEffect, useMemo, useState } from 'react';
import { enviroment } from '../../../../configs/app.config';
import { ILang } from '../../../../../assets/lang/lang';
import { setLocale } from '../../../../../store/store.reducer';
import categoryIcon from '/src/assets/images/icons/category-icon-header.png'

const HeaderRightComponent = ({toggleMenu}) => {
    const languages = useStore('languages');
    const dispatch = useDispatch();
    const locale = useStore('locale');
    

    const currentLang = useMemo(() => {
        return localStorage.getItem(`${enviroment.applicationName}-locale`) as ILang || 'en';
    }, [locale]);

    useEffect(() => {
        dispatch(setLocale(currentLang));
    }, [currentLang, dispatch]);

    const changeLanguage = useCallback((e: any) => {
        dispatch(setLocale(e.target.value));
    }, [dispatch]);


  return (
    <div className={css.rightContainer}>
        <div className={css.languageContainer}>
            <div className={css.selectBtn}> 
                <div className={css.selectContainer}>
                    <select name='select' id='select' onChange={changeLanguage} value={currentLang}>
                        {
                            languages.map((item: ILanguages) => (
                                <option value={item.key} key={item.key}>{item.value}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
        <div className={css.category} onClick={toggleMenu}>
            <img src={categoryIcon} alt='category' />
        </div>
    </div>
  )
}

export default HeaderRightComponent