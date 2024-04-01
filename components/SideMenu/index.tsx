import {
  useState, forwardRef, useImperativeHandle, useEffect,
} from 'react';
import Image from 'next/image';
import styles from './SideMenu.module.css';
import arrowUpIcon from '../../public/icons/arrowUp.svg';
import arrowDownIcon from '../../public/icons/arrowDown.svg';

import SubMenu from './SubMenu';

export type SubMenuProps = {
  displayName: string,
  sortKey: number,
  componentRefName:string,
  additionalConfig:any
};

type MenuProps = {
  titleName: string,
  sortIdx: number,
  childNodes :SubMenuProps[]
};

export interface CanShowAlert {
  showAlert(): void;
}

export interface SideMenuProps {
  dataSource: MenuProps[],
  onChangeIdx:(primaryIdx: number, childIdx: number) => void;
}
export interface SideMenuRef {
  onNext: () => void;
}

const SideMenu = forwardRef<SideMenuRef, SideMenuProps>((props, ref) => {
  const parseMenuItems = () => props.dataSource.map((menuObj) => (
    { ...menuObj, isSelected: false }
  ));
  const [menuItems, setMenuItems] = useState(parseMenuItems());
  const [isNext, setIsNext] = useState(true);
  const [selectIdx, setSelectIdx] = useState(0);
  const [innerIdx, setInnerIdx] = useState(0);
  const toggleMenu = (idx: number) => {
    const tmpArr = [...menuItems];
    const tmp = { ...tmpArr[idx] };
    tmp.isSelected = !tmp.isSelected;
    tmpArr.splice(idx, 1, tmp);
    setMenuItems(tmpArr);
  };
  const selectPrev = (primaryIdx:number, secondaryIdx:number) => {
    setSelectIdx(primaryIdx);
    setInnerIdx(secondaryIdx);
    props.onChangeIdx(primaryIdx, secondaryIdx);
  };

  useEffect(() => {
    toggleMenu(0);
  }, []);

  useImperativeHandle(ref, () => ({
    onNext() {
      if (isNext) {
        let innerIdxVal = innerIdx + 1;
        let mainIdxVal = selectIdx;
        if (innerIdxVal > menuItems[selectIdx].childNodes.length - 1) {
          setInnerIdx(0);
          innerIdxVal = 0;
          mainIdxVal = selectIdx + 1;
          setSelectIdx(selectIdx + 1);
        }
        if (menuItems.length > mainIdxVal) {
          if (menuItems[mainIdxVal].childNodes.length > innerIdxVal) {
            setInnerIdx(innerIdxVal);
          }
        } else {
          setIsNext(false);
          setSelectIdx(menuItems.length - 1);
        }

        if (mainIdxVal < menuItems.length && mainIdxVal !== selectIdx) {
          toggleMenu(mainIdxVal);
        }
      }
    },
  }));

  return (
    <div className={styles.SideMenu}>
      <ul className={styles.container}>
        {menuItems?.sort((a, b) => (a.sortIdx - b.sortIdx))?.map((menuObj, idx) => (
          <li className={`${idx === selectIdx ? styles.SideMenuList : styles.SideMenuListnotSelect}`} key={menuObj.sortIdx}>
            <span>&nbsp;</span>
            <button
              className={styles.SideMenu_Btn}
              type="button"
              onClick={() => toggleMenu(idx)}
            >
              <div className={styles.SideMenu_Label}>
                {menuObj.titleName}
                {menuObj?.isSelected ? (
                  <Image
                    src={arrowUpIcon}
                    alt="fab icon"
                    height="15px"
                    width="20px"
                  />
                ) : (
                  <Image
                    src={arrowDownIcon}
                    alt="fab icon"
                    height="15px"
                    width="20px"
                  />
                )}
              </div>
            </button>
            <SubMenu
              selectedIdx={innerIdx}
              selectPrev={selectPrev}
              masterIdx={idx}
              masterSelectionIdx={selectIdx}
              isEnable={menuObj.isSelected}
              data={menuObj.childNodes as SubMenuProps[]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default SideMenu;
