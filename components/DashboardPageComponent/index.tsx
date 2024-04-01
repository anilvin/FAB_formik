/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-use-before-define */
import Image from 'next/image';
import { useContext, useState } from 'react';

import Workspace, { WorkspaceTabProps } from '@genieology/gtb-ui/dist/components/Workspace';

import { FillEnum, Logo } from '@genieology/gtb-ui';
import styles from '../dashboard/dashboard.module.css';
import useLoader from '../../hooks/useLoader';
import Home from '../../public/icons/Home.svg';
import Dashboard from '../dashboard';
import SMEBussinessAccounts from '../dashboard/SMEBussinessAccounts';
import SMELoans from '../dashboard/SMELoans';
import BusinessProductForm from '../businessProductForm';
import PreEligibilityFormComponent from '../preEligibilityForm';
import { details } from '../../API';
import ConfirmationModal from '../ConfirmationModal';
import MasterContext from '../MasterContext';

type TabMenuProps = {
  content: JSX.Element,
  description: string,
  id: number,
  pinned: boolean,
  home?: boolean,
  title: string,
};

type ProductTypeProps = {
  productType:string,
  productList?: string,
};

function DashboardPageComponent() {
  const BA_BASIC_ACCOUNT = 'MBBF-BASIC_ACCOUNT';
  const BA_ADVANTAGE_ACCOUNT = 'MBBF-ADVANTAGE_ACCOUNT';
  const BA_PREF_ACCOUNT = 'MBBF-PREFERRED_ACCOUNT';
  const [openBAConfirmation, setOpenBAConfirmation] = useState<boolean>(false);
  const [openPOSLoanConfirmation, setOpenLoanConfirmation] = useState<boolean>(false);
  const [loader, startLoader, removeLoader] = useLoader();
  const [prevLoanAppData, setPrevLoanAppData] = useState<any>();
  const [prevBAAppData, setPrevBAAppData] = useState<any>();
  const confirmationMessage = 'The previous Application found. Do you want to load that one?';
  const userDetail = useContext(MasterContext.UserContext);

  async function checkPrevApplicationStatus(productType: string) {
    console.log('userdetail dashboardpagecmp', userDetail);
    startLoader();
    const productObj: ProductTypeProps = {
      productType,
    };
    switch (productType) {
      case 'MBBF':
        productObj.productList = 'MBBF-BUS~MBBF-IPRE';
        break;
      case 'POS':
        productObj.productList = 'POS';
        break;
      case BA_PREF_ACCOUNT:
        productObj.productList = BA_PREF_ACCOUNT;
        break;
      case BA_ADVANTAGE_ACCOUNT:
        productObj.productList = BA_ADVANTAGE_ACCOUNT;
        break;
      case BA_BASIC_ACCOUNT:
        productObj.productList = BA_BASIC_ACCOUNT;
        break;
      default:
        productObj.productList = BA_BASIC_ACCOUNT;
    }

    // eslint-disable-next-line @typescript-eslint/return-await
    return await details.dedupeCheck(userDetail?.userName || 'sanjay11', productObj) // userDetail.userName,
      .then((res) => {
        removeLoader();
        if (res?.isRecordFound === 'Y') {
          return res;
        } console.log('Data not found');
        return false;
      })
      .catch((err) => {
        console.error(err);
        // setOpenMessage(true);
        removeLoader();
        return false;
        // setMessageContent(err?.data?.mdmResponse?.output);
      });
  }
  const addNewTab = (formName: string) => {
    switch (formName) {
      case 'businessForm':
        updateTabMenu((current) => {
          const temp = [...current];
          if (temp.findIndex((tabObj) => tabObj.id === 2) === -1) {
            return [...temp, smeBusinessAccount];
          } return temp;
        });
        setActiveTab(2);
        break;
      case 'SMEForm':
        updateTabMenu((current) => {
          const temp = [...current];
          if (temp.findIndex((tabObj) => tabObj.id === 3) === -1) {
            return [...temp, smeLoan];
          } return temp;
        });
        setActiveTab(3);
        break;
      default:
    }
  };
  const mainDashboard: TabMenuProps = {
    content: <Dashboard onProductClick={addNewTab} />,
    description: 'Workspace description Workspace description',
    id: 1,
    home: true,
    pinned: true,
    title: 'Dashboard',
  };

  const [tabMenu, updateTabMenu] = useState<TabMenuProps[]>([mainDashboard]);
  const [activeTab, setActiveTab] = useState(1);

  const launchBusinessApplicationFrmPrevData = (res:any) => {
    setOpenBAConfirmation(false);
    updateTabMenu((current) => {
      const temp = [...current];
      const prevBusinessFormIdx = temp.findIndex((tabObj) => tabObj.id === 4);
      const prevProductListIdx = temp.findIndex((tabObj) => tabObj.id === 2);
      if (prevProductListIdx !== -1) {
        temp.splice(prevProductListIdx, 1);
        if (prevBusinessFormIdx === -1) {
          const newApplicationForm = {
            content: <BusinessProductForm productType={res} previousWorkItemData={res} />,
            description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
            id: 4,
            pinned: false,
            title: 'SME Business Accounts',
          };
          return [...temp, newApplicationForm];
        }
      }
      return temp;
    });
    setActiveTab(4);
  };

  const launchFreshBusinessApplication = (type:string) => {
    updateTabMenu((current) => {
      const temp = [...current];
      let newApplicationForm;
      const prevBusinessFormIdx = temp.findIndex((tabObj) => tabObj.id === 4);
      const prevProductListIdx = temp.findIndex((tabObj) => tabObj.id === 2);
      switch (type) {
        case BA_PREF_ACCOUNT:
          newApplicationForm = businessPreferredProductForm;
          break;
        case BA_ADVANTAGE_ACCOUNT:
          newApplicationForm = businessAdvancedProductForm;
          break;
        case BA_BASIC_ACCOUNT:
          newApplicationForm = businessBasicProductForm;
          break;
        default:
          newApplicationForm = businessBasicProductForm;
      }

      if (prevProductListIdx !== -1) {
        temp.splice(prevProductListIdx, 1);
        if (prevBusinessFormIdx === -1) {
          return [...temp, newApplicationForm];
        }
      }
      return temp;
    });
    setActiveTab(4);
  };

  const onBussinessApply = async (type: string) => {
    const res = await checkPrevApplicationStatus(type);
    if (res) {
      setPrevBAAppData(res);
      setOpenBAConfirmation(true);
      // launchBusinessApplicationFrmPrevData(res);
    } else {
      launchFreshBusinessApplication(type);
    }
  };

  const launchLoanApplication = (type:string) => {
    updateTabMenu((current) => {
      const temp = [...current];
      let newApplicationForm;
      const prevBusinessFormIdx = temp.findIndex((tabObj) => tabObj.id === 5);
      if (type === 'POS') {
        newApplicationForm = loadPOCApplicationForm;
      } else {
        newApplicationForm = loadMBBFApplicationForm;
      }
      const prevProductListIdx = temp.findIndex((tabObj) => tabObj.id === 3);
      if (prevProductListIdx !== -1) {
        temp.splice(prevProductListIdx, 1);
        if (prevBusinessFormIdx === -1) {
          return [...temp, newApplicationForm];
        }
      }
      return temp;
    });
    setActiveTab(5);
  };

  const launchLoanApplicationWithPrevData = (res: any) => {
    setOpenLoanConfirmation(false);
    updateTabMenu((current) => {
      const temp = [...current];
      let newApplicationForm;
      const prevBusinessFormIdx = temp.findIndex((tabObj) => tabObj.id === 5);
      if (res.productType === 'POS') {
        newApplicationForm = {
          content: <PreEligibilityFormComponent
            formType={1}
            previousWorkItemData={res}
            productCode="POS"
          />,
          description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
          id: 5,
          pinned: false,
          title: 'Loan Application Form',
        };
      } else {
        newApplicationForm = {
          content: <PreEligibilityFormComponent
            formType={0}
            previousWorkItemData={res}
            productCode="POS"
          />,
          description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
          id: 5,
          pinned: false,
          title: 'Loan Application Form',
        };
      }
      const prevProductListIdx = temp.findIndex((tabObj) => tabObj.id === 3);
      if (prevProductListIdx !== -1) {
        temp.splice(prevProductListIdx, 1);
        if (prevBusinessFormIdx === -1) {
          return [...temp, newApplicationForm];
        }
      }
      return temp;
    });
    setActiveTab(5);
  };

  const onLoanApply = async (type:string) => {
    const res = await checkPrevApplicationStatus(type);
    if (res) {
      // Handle Confirmation flow
      setPrevLoanAppData({ ...res, type });
      setOpenLoanConfirmation(true);
      // launchLoanApplicationWithPrevData(res, type);
    } else {
      launchLoanApplication(type);
    }
  };

  const smeBusinessAccount: TabMenuProps = {
    content: <SMEBussinessAccounts onApply={onBussinessApply} />,
    description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
    id: 2,
    pinned: false,
    title: 'SME Business Accounts',
  };
  const smeLoan: TabMenuProps = {
    content: <SMELoans onApply={onLoanApply} />,
    description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
    id: 3,
    pinned: false,
    title: 'SME Loan Accounts',
  };
  const businessBasicProductForm: TabMenuProps = {
    content: <BusinessProductForm
      productType={BA_BASIC_ACCOUNT}
    />,
    description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
    id: 4,
    pinned: false,
    title: 'SME Business Accounts',
  };
  const businessAdvancedProductForm: TabMenuProps = {
    content: <BusinessProductForm
      productType={BA_ADVANTAGE_ACCOUNT}
    />,
    description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
    id: 4,
    pinned: false,
    title: 'SME Business Accounts',
  };
  const businessPreferredProductForm: TabMenuProps = {
    content: <BusinessProductForm
      productType={BA_PREF_ACCOUNT}
    />,
    description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
    id: 4,
    pinned: false,
    title: 'SME Business Accounts',
  };
  const loadMBBFApplicationForm: TabMenuProps = {
    content: <PreEligibilityFormComponent
      formType={0}
      productCode="MBBF-BUS~MBBF-IPRE"
    />,
    description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
    id: 5,
    pinned: false,
    title: 'Loan Application Form',
  };

  const loadPOCApplicationForm: TabMenuProps = {
    content: <PreEligibilityFormComponent
      productCode="POC"
      formType={1}
    />,
    description: 'Grow Your Business and achieve your corporate goals with our range of finance products and services specially designed for growing businesses',
    id: 5,
    pinned: false,
    title: 'Loan Application Form',
  };

  const handleTabClose = (tab: WorkspaceTabProps) => {
    if (tab.id !== 1) {
      updateTabMenu((current) => {
        const temp = [...current];
        const delIdx = temp.findIndex((tabObj) => tabObj.id === tab.id);
        temp.splice(delIdx, 1);
        return temp;
      });
      setActiveTab(1);
      return true;
    }
    return false;
  };
  return (
    <>
      {loader}
      {
        openBAConfirmation
        && (
          <ConfirmationModal
            key="BAConfirmation"
            onCancel={() => {
              setOpenBAConfirmation(false);
              launchFreshBusinessApplication(prevBAAppData?.productType);
            }}
            onSuccess={launchBusinessApplicationFrmPrevData}
            setOpen={setOpenBAConfirmation}
            message={confirmationMessage}
            prevAppData={prevBAAppData}
          />
        )
        }
      {
        openPOSLoanConfirmation
        && (
          <ConfirmationModal
            key="PSConfirmation"
            onCancel={() => {
              setOpenLoanConfirmation(false);
              launchLoanApplication(prevLoanAppData?.productType || 'POS');
            }}
            onSuccess={launchLoanApplicationWithPrevData}
            setOpen={setOpenLoanConfirmation}
            message={confirmationMessage}
            prevAppData={prevLoanAppData}
          />
        )
        }
      <>

        <div className={styles.container}>
          <Logo
            fill={FillEnum.WHITE}
            height={60}
            width={89}
          />
          <div className={styles.dashboard_logo_text}>
            Welcome to FAB Business Banking
          </div>
        </div>
        <div style={{

          position: 'absolute',
          marginTop: '46px',
          marginLeft: '50px',
          borderRadius: '5.5px ',
          backgroundColor: 'blue',
          height: '45px',
          width: '45px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Image src={Home} />
        </div>
        <div
          style={{
            marginRight: '9rem',
            marginLeft: '3rem',
            marginTop: '-3rem',
            marginBottom: '4.4rem',
          }}
        >
          {tabMenu?.length > 0 ? (

            <Workspace
              tabs={tabMenu}
              activeSpaceId={activeTab}
              closeTabHandler={handleTabClose}
            />
          ) : null}
        </div>
      </>
    </>

  );
}
export default DashboardPageComponent;
