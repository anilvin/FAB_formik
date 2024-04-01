import styles from './SideMenu.module.css';

type SubMenuProps = {
  displayName: string,
  sortKey: number,
  componentRefName:string,
  additionalConfig:any
};

type SubMenuDataProps = {
  data: SubMenuProps[],
  isEnable: Boolean,
  masterIdx: number,
  selectedIdx: number,
  masterSelectionIdx: number,
  selectPrev:(parentIdx:number, subIdx:number)=>void,
};

function SubMenu({
  data, isEnable, masterIdx, masterSelectionIdx, selectPrev, selectedIdx,
} : SubMenuDataProps) {
  if (isEnable) {
    const changeSelection = (idx:number) => {
      if (masterIdx < masterSelectionIdx) {
        selectPrev(masterIdx, idx);
      } else if (masterIdx === masterSelectionIdx && selectedIdx > idx) {
        selectPrev(masterIdx, idx);
      }
      selectPrev(masterIdx, idx); // This line is there only for testing purpose(Note please remove)
    };
    const isForbidden = (idx:number) => {
      if (masterIdx < masterSelectionIdx) {
        return false;
      }
      if (masterIdx === masterSelectionIdx && selectedIdx > idx) {
        return false;
      }
      return true;
    };
    return (
      <div className={styles.SideMenu_subMenu}>
        {data.map((subMenuObj, idx) => (
          <button
            type="button"
            onClick={() => changeSelection(idx)}
            key={subMenuObj.sortKey}
            className={`${isForbidden(idx) ? styles.SubMenu_Title_forbidden : styles.SubMenu_Title}`}
          >
            <h3 className={`${masterSelectionIdx === masterIdx && subMenuObj.sortKey === selectedIdx ? styles.SideMenu_menuSelect : styles.SideMenu_default}`}>{subMenuObj.displayName}</h3>
          </button>
        ))}
      </div>
    );
  } return null;
}

export default SubMenu;
