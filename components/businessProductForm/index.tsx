/* eslint-disable @typescript-eslint/dot-notation */
import React, {
  createRef, useContext, useEffect, useState,
} from 'react';
import BusinessProductData from '../../public/data/BusinessProduct.json';
import SideMenu, { SideMenuRef } from '../SideMenu';
import AboutYourCompanyForm from './AboutYourCompanyForm';
import ConnectedPartiesForm from './ConnectedPartiesForm';
import KCPForm from './KCPForm';
import { details } from '../../API';
import MasterContext from '../MasterContext';
import useLoader from '../../hooks/useLoader';
import TaxClassificationForm from './TaxClassificationForm';

type SideMenuIndxProp = {
  masterIdx: number,
  childIdx: number
};

type Props = {
  productType: string,
  previousWorkItemData?: any,
};

function BusinessProductForm({ productType, previousWorkItemData }: Props) {
  const sideMenuRef = createRef<SideMenuRef>();
  const initPageIdx: SideMenuIndxProp = { masterIdx: 0, childIdx: 0 };
  const [pageIdx, setPageIdx] = useState<SideMenuIndxProp>(initPageIdx);
  const [tempUserData] = useState<any | undefined>();
  const userDetail = useContext(MasterContext.UserContext);
  const [startLoad, setStartLoad] = useState(false);
  const [loader, startLoader, removeLoader] = useLoader();
  const [applicationData, setApplicationData] = useState<any>();

  function removeEmpty(obj:any) {
    return Object.entries(obj)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, v]) => v != null)
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
  }

  const fetchWorkItem = (wiName: string) => {
    details.fetchWorkItems(userDetail.userName, wiName).then((res) => {
      const appData = res?.dataArea;
      details.fetchConnectedParties(userDetail.userName, wiName)
        .then((connectedPartyRes) => {
          if (connectedPartyRes?.dataArea?.connectedParties?.connectedPartiesDetails) {
            appData.customerDetails['connectedParties'] = connectedPartyRes?.dataArea?.connectedParties;
          }
          appData.customerDetails = removeEmpty(appData.customerDetails);
          setApplicationData(appData);
          removeLoader();
          setStartLoad(true);
        })
        .catch((err) => {
          console.error(err);
          removeLoader();
        // setMessageContent(err?.data?.mdmResponse?.output);
        });
    })
      .catch((err) => {
        console.error(err);
        removeLoader();
      // setMessageContent(err?.data?.mdmResponse?.output);
      });
  };

  useEffect(() => {
    if (previousWorkItemData) {
      startLoader();
      // Load Previous Work item Detail & save in Form
      fetchWorkItem(previousWorkItemData?.wiName);
    } else {
      setStartLoad(true);
    }
  }, []);

  const returnIdxObj = (masterIdx:number, childIdx:number) => {
    const maxChildLength = BusinessProductData.parentNode[masterIdx].childNodes.length;
    if (childIdx < maxChildLength - 1) {
      return ({ masterIdx, childIdx: childIdx + 1 });
    }
    return ({ masterIdx: masterIdx + 1, childIdx: 0 });
  };
  const incrementStepper = () => {
    setPageIdx(returnIdxObj(pageIdx.masterIdx, pageIdx.childIdx));
  };
  const changeIdx = (idx:number, idx2:number) => {
    setPageIdx({ masterIdx: idx, childIdx: idx2 });
  };
  const prepareBusinessReqData = (forNew?:Boolean) => {
    const registrationDetails = {
      rmCode: 'saff',
      firstName: userDetail?.firstName,
      lastName: userDetail?.lastName,
      phoneNumber: userDetail?.phoneNo,
      emailID: userDetail?.email,
    };
    const applicationDetail = {
      appDetailIOrderId: '',
      created_date: '',
      new_or_existing_customer: forNew ? 'New' : 'Existing',
      product: 'BUSINESS',
      loan_type: 'Fresh',
      loan_account_number: '',
      legal_entity_name: 'Legal1',
      cif_id: '',
      emirates_id: userDetail?.emiratesId,
      trade_license_number: userDetail?.tradeLicense,
      branch: '',
      channel: 'Portal',
    };
    return ({ registrationDetails, applicationDetail });
  };

  const createWorkItem = ({ data, onSuccessCall }: SaveFunctionProps) => {
    startLoader();
    const { registrationDetails, applicationDetail } = prepareBusinessReqData(true);
    const saveData = {
      registrationDetails,
      applicationDetail,
      customerDetail: data,
    };
    const captureRequest = {
      sysRefNo: Date.now().toString(),
      initiatedBy: userDetail.userName,
      channel: 'Portal',
      productType,
      source: 'P',
      isWorkitemCreate: 'C',
      folderIndex: '',
      wiUrn: '',
      wiName: '',
    };
    const dataArea = {
      captureRequest,
      customerDetails: saveData,
    };
    details.createWorkItem({ dataArea })
      .then((res) => {
      // fetchWorkItem(res.workitemNumber);
        removeLoader();
        dataArea.captureRequest.folderIndex = res.folderIndex;
        dataArea.captureRequest.wiName = res.workitemNumber;
        dataArea.captureRequest.wiUrn = res.wiUrn;
        setApplicationData(dataArea);
        onSuccessCall();
      })
      .catch((err) => {
        console.error(err);
        removeLoader();
      });
  };

  type SaveFunctionProps = {
    data:any,
    onSuccessCall:() => void,
  };

  const updateWorkItem = ({ data, onSuccessCall }:SaveFunctionProps) => {
    details.createWorkItem({ dataArea: data })
      .then((res) => {
        removeLoader();
        onSuccessCall();
        console.log(res, 'Data created');
      })
      .catch((err) => {
        console.error(err);
        removeLoader();
      });
  };

  const increaseIndex = () => {
    sideMenuRef.current?.onNext();
    incrementStepper();
  };

  const onSubmitVal = (val:any, type:string, forArrayMap?:boolean) => {
    console.log('onsubmitVal', val);
    startLoader();
    const data:any = {};
    data[val.type] = val.data;
    // setApplicationData((currentProp:any) =>
    const cloned = { ...applicationData };
    if (cloned[type] || cloned['captureRequest']) {
      cloned['captureRequest'] = {
        ...cloned['captureRequest'],
        isWorkitemCreate: 'M',
        sysRefNo: Date.now().toString(),
      };
      if (forArrayMap) {
        if (cloned['customerDetails'][type]) {
          const arr = cloned['customerDetails'][type]['connectedPartiesDetails'].filter((x:any) => val.connectedPartyType !== x.connectedPartyType);
          cloned['customerDetails'][type]['connectedPartiesDetails'] = [val, ...arr]; // Need to test this code and Replace logic need to be added.
        } else {
          cloned['customerDetails'][type] = {
            connectedPartiesDetails: [{ ...val }],
          };
        }
      } else {
        cloned['customerDetails'][type] = { ...cloned[type], ...data };
      }
      updateWorkItem({ data: cloned, onSuccessCall: increaseIndex });
      setApplicationData({ ...cloned });
    } else {
      const parent:any = {};
      parent[type] = data;
      // Need to check this flow once API up
      createWorkItem({
        data: val.data,
        onSuccessCall: increaseIndex,
      });
    }
  };

  const returnForm = () => {
    switch (pageIdx.masterIdx) {
      case 0:
        return (
          <AboutYourCompanyForm
            initData={applicationData?.customerDetails || {}}
            // initData={tempUserData?.aboutYourCompany}
            onFormSubmit={(val) => onSubmitVal(val, 'customerDetails')}
            childIdx={pageIdx.childIdx}
          />
        );
      case 1:
        return (
          <ConnectedPartiesForm
            initData={applicationData?.customerDetails?.connectedParties}
            onFormSubmit={(val) => onSubmitVal(val, 'connectedParties', true)}
            childIdx={pageIdx.childIdx}
          />
        );
      case 2:
        return (
          <KCPForm
            initData={tempUserData?.KCPForm}
            onFormSubmit={(val) => onSubmitVal(val, 'KCPForm')}
            childIdx={pageIdx.childIdx}
          />
        );
      case 3:
        return <TaxClassificationForm onFormSubmit={(val) => onSubmitVal(val, 'TaxForm')} childIdx={pageIdx.childIdx} />;
      //   return <AboutYourCompanyForm onFormSubmit={onNext} childIdx={pageIdx.childIdx} />;
      // case 5:
      //   return <AboutYourCompanyForm onFormSubmit={onNext} childIdx={pageIdx.childIdx} />;
      // case 6:
      //   return <AboutYourCompanyForm onFormSubmit={onNext} childIdx={pageIdx.childIdx} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="boxWindows"
      style={{
        marginLeft: '2rem', paddingTop: '2rem',
      }}
    >
      {!startLoad && loader}
      <div>
        <SideMenu
          ref={sideMenuRef}
          dataSource={BusinessProductData.parentNode as any}
          onChangeIdx={changeIdx}
        />
        {/* <div>
          <button onClick={onNext} type="button">
            Next
          </button>
        </div> */}
      </div>
      <div>
        {startLoad && returnForm()}
      </div>
    </div>
  );
}

export default BusinessProductForm;
