/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/dot-notation */
import React, {
  createRef, useContext, useEffect, useState,
} from 'react';
import EligibiltyCheckData from '../../public/data/LoanEligibility.json';
import SideMenu, { SideMenuRef } from '../SideMenu';
// import UserBusinessOnBoardContext from '../../context/businessAccountContext';
// import {
//   ApplicationDetailProps,
//   CustomerDetailProps,
//   AddressDataSetProps,
//   IdentityDataProps,
//   EKycDataProps,
//   TaxClassificationDataProps,
//   KCPAppDetailDataProps,
// } from '../businessProductForm/PropDataType';
import ApplicationDetailsPage from '../formComponents/PreEligibilityForm';
import PreScreeningMBBF from '../formComponents/PreEligibilityForm/MBBFLoan';
import SubmissionScreen from '../formComponents/PreEligibilityForm/SubmissionScreen';
import PreScreeningPOS from '../formComponents/PreEligibilityForm/POSLoan';
import UploadDocument from '../formComponents/PreEligibilityForm/UploadDocumentScreen';
import { details } from '../../API';
import MasterContext from '../MasterContext';
import useLoader from '../../hooks/useLoader';
import Message from '../Message';
import MBBFApplicationDetailsPage from '../formComponents/PreEligibilityForm/MBBFApplicationDetailsPage';

// type BusinessAccountFormDataType = {
//   applicationDetail: ApplicationDetailProps,
//   customerDetail: CustomerDetailProps
//   addressDetails: AddressDataSetProps,
//   identityDetails: IdentityDataProps
//   enrichKYC:EKycDataProps,
//   taxClassification:TaxClassificationDataProps
//   kcpAppDetail: KCPAppDetailDataProps
// };

type SideMenuIndxProp = {
  masterIdx: number,
  childIdx: number
};

const FORM_TYPE = {
  MBBF: 0,
  POS: 1,
};

type Props = {
  previousWorkItemData?: any,
  formType: number; // < 0 For POC & 1 for MBBF
  productCode: string,
};

function PreEligibilityFormComponent({ previousWorkItemData, formType, productCode }:Props) {
  console.log(previousWorkItemData);
  const [startLoad, setStartLoad] = useState(false);
  const sideMenuRef = createRef<SideMenuRef>();
  const initPageIdx: SideMenuIndxProp = { masterIdx: 0, childIdx: 0 };
  const [pageIdx, setPageIdx] = useState<SideMenuIndxProp>(initPageIdx);
  const [tempUserData, setTempUserData] = useState<any>();
  const [applicationData, setApplicationData] = useState<any>();
  const userDetail = useContext(MasterContext.UserContext);
  const [loader, startLoader, removeLoader] = useLoader();
  const [aplicantData, setAplicantData] = useState({});
  const [openMessage, setOpenMessage] = useState(false);
  const [workResponse, setWorkResponse] = useState();

  // const foo = useMemo(() => ({ userBusinessAccountData: tempUserData }), [tempUserData]);
  const returnIdxObj = (masterIdx:number, childIdx:number) => {
    const maxChildLength = EligibiltyCheckData.parentNode[masterIdx].childNodes.length;
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

  useEffect(() => {
    if (previousWorkItemData) {
      startLoader();
      // Load Previous Work item Detail & save in Form
      details.fetchWorkItems(userDetail.userName, previousWorkItemData.wiName).then((res) => {
        removeLoader();
        setApplicationData(res?.dataArea);
        console.log('Data found', res);
        setStartLoad(true);
      })
        .catch((err) => {
          console.error(err);
          removeLoader();
          // setMessageContent(err?.data?.mdmResponse?.output);
        });
    } else {
      setStartLoad(true);
    }
  }, []);

  const returnPOSCheckData = (val:any) => ({
    posLoanType: 'Top Up',
    productType: 'POS',
    posPrimaryIndustry: val?.primary_industry || '',
    posLengthOfBusiness: val?.lengthOfBusiness || '',
    posVintage: val?.posVintage || '',
    posMonthlyPosTurnover: val?.posMonthlyPosTurnover || '',
    posAnnualTurnover: val?.posAnnualTurnover || '',
  });

  const returnMBBFCheckData = (val:any) => ({

    channel: 'Portal',
    productType: 'MBBF-BUS',
    userName: userDetail.userName,
    mbbfResidentialStatus: val?.residentialStatus || '',
    mbbfPrimaryIndustry: val?.primary_industry,
    mbbfLengthOfBusiness: val?.lengthOfBusiness,
    mbbfBuzIncomePm: val?.businessIncome,
    mbbfNetProfitPerMonth: val?.netProfit,
    mbbfCurrentCompanyTurnover: val?.currentCompanyTernover,
    mbbfLoanType: val?.loanTypeRes,
    mbbfPropertyLocation: val?.propertyLocation,
    mbbfLoanTenor: val?.tenor,
  });

  const prepareWorkItemData = (val:any) => {
    const registrationDetails = {
      rmCode: val?.relationshipManagerCode || '',
      firstName: userDetail?.firstName,
      lastName: userDetail?.lastName,
      phoneNumber: userDetail?.phoneNo,
      emailID: userDetail?.email,
    };
    const applicationDetail = {
      appDetailIOrderId: '',
      created_date: '',
      new_or_existing_customer: 'New',
      product: (formType === FORM_TYPE.POS) ? 'POS' : 'MBBF-BUS',
      loan_type: 'Fresh',
      loan_account_number: '',
      legal_entity_name: '',
      cif_id: '',
      emirates_id: userDetail?.emiratesId,
      trade_license_number: userDetail?.trade_license_number,
      branch: '',
      channel: 'Portal',
      'client type': '',
      'channel preference': '',
      source: '',
      Fetch_Customer: '',
      De_Dupe_Customer: '',
    };
    const customerDetail = {
      customeriOrderId: '',
      short_name: '',
      country_of_incorporation: val?.countryOfIncorporation,
      country_of_domiciles: val?.countryOfRecidence,
      business_operation: '',
      date_of_incorporation: val?.date_of_incorporation || '',
      website_address: '',
      emirate_of_registration: val?.addressEmirate,
      legal_entity_type: '',
      legal_entity_category: '',
      primary_industry: val?.primaryIndustry,
      secondary_industry: val?.secondaryIndustryOfOperation,
      number_of_employes: '',
      current_company_turnoer: '',
      projected_company_turnover: '',
      sister_company: 'Y',
      legal_entity_name: '',
      group_name: '',
      registration_of_authority: '',
      registration_authority_name: '',
      vat: '',
      fab_sub_segment: '',
      sector: '',
      authorised_signatory: '',
      rollovertype: '',
      customer_status: '',
      business_details_description: '',
    };
    const posLoanDetails = {
      posLoanDetailsiOrderID: '',
      posVintage: val?.posVintage || '',
      loanAmount: '',
      lob: val?.lengthOfBusiness || '>12M',
      annualTurnover: val?.annualTurnOver,
      averageMonthlyPos: val?.monthlyPosTernover,
      availabiityAudited: '',
      contractStatus: '',
      existingLoanNumber: '',
      loanOutstanding: '',
      principalOutstanding: '',
      agreementId: '',
      tentativeInterest: '',
      processingFee: '',
      facilityPurposeDesc: '',
      keyInsuranceCharges: '',
      loanTenure: '',
      posAcquirer: '',
      relatedEntityPos: '',
      mandatedMonthly: '',
      channelsPlatforms: '',
      channelsRevenue: '',
      facilityPurpose: '',
      supplierName: '',
    };
    const addressDetails = {
      address: [
        {
          addressiOrderId: '',
          addressType: val?.addressType || '',
          buildingNumber: val?.buildingNumber || '',
          buildingName: val?.buildingName || '',
          streetName: val?.streetName || '',
          locationArea: val?.locationArea || '',
          townCity: val?.townCity || '',
          zipCode: val?.zipCode || '',
          addressEmirate: val?.addressEmirate || '',
          addressPoBox: val?.addressPoBox || '',
          country: val?.countryOfRecidence || '',
          addressStayingAtThis: val?.addressStayingAtThis || '',
          mailingAddress: 'Y' || '',
          primaryMobileNumber: val?.primaryMobileNumber || '',
          officeTelephoneNumber: val?.officeTelephoneNumber || '',
          homeTelephoneNumber: val?.homeTelephoneNumber || '',
          fax: val?.fax || '',
          emailAddress: val?.emailAddress || '',
          nearestLandmark: val?.nearestLandmark || '',
        },
      ],
    };
    const identityDetails = {
      identity: [
        {
          identityiOrderId: '',
          identifiertype: val?.identifiertype || '',
          number: val?.number || '',
          issuedate: val?.issuedate || '',
          expirydate: val?.expirydate || '',
          placeofissue: val?.placeofissue || '',
        },
      ],
    };
    return ({
      registrationDetails,
      applicationDetail,
      customerDetail,
      posLoanDetails,
      addressDetails,
      identityDetails,
    });
  };
  type SaveFunctionProps = {
    workItemData:any,
    onSuccessCall:() => void,
  };
  const createWorkItemInSystem = ({ workItemData, onSuccessCall }: SaveFunctionProps) => {
    startLoader();
    details.createWorkItem(workItemData)
      .then((res) => {
        removeLoader();
        setWorkResponse(res);
        onSuccessCall();
      }).catch((err) => {
        removeLoader();
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onNext = (val:any) => {
    sideMenuRef.current?.onNext();
    incrementStepper();
    const data:any = {};
    data[val.type] = val.data;
    setApplicationData({ ...applicationData, ...data });
  };
  const checkForEligibilty = (dataSet:any, val: any) => {
    setStartLoad(false);
    startLoader();
    details.checkEligibilty(dataSet, userDetail.userName)
      .then((res) => {
        console.log(res);
        if (res.isEligible === 'YES') {
          const temp = { ...applicationData?.customerDetails };
          const data:any = {};
          data['customerDetail'] = val;
          temp['customerDetail'] = data;
          setApplicationData({
            ...applicationData,
            customerDetails: data,
          });
          sideMenuRef.current?.onNext();
          incrementStepper();
          removeLoader();
        } else {
          // Show Fail message & Exit the flow
          removeLoader();
          setOpenMessage(true);
        }
      }).catch((err) => {
        console.error(err);
        removeLoader();
      });
    // elegibility check sucess
    // const temp = { ...applicationData?.customerDetails };
    // const data:any = {};
    // data['customerDetail'] = val;
    // temp['customerDetail'] = data;
    // setApplicationData({
    //   ...applicationData,
    //   customerDetails: data,
    // });
    // sideMenuRef.current?.onNext();
    // incrementStepper();
  };
  const prepareMbbfWorkItemData = (v:any) => {
    const obj = {

      registrationDetails: {
        rmCode: v?.relationshipManagerCode || '',
        firstName: v.firstName,
        lastName: v.lastName,
        phoneNumber: v.phoneNo,
        emailID: v.emailID,
      },
      applicationDetail: {
        appDetailIOrderId: '',
        created_date: '',
        new_or_existing_customer: 'New',
        product: 'MBBF-BUS',
        loan_type: 'Fresh',
        loan_account_number: '',
        legal_entity_name: '',
        cif_id: '',
        emirates_id: '',
        trade_license_number: v.tradeLicenseNo,
        branch: '',
        channel: 'Portal',
      },
      customerDetail: {
        customeriOrderId: '',
        short_name: '',
        country_of_incorporation: v?.countryOfIncorporation || '',
        country_of_domiciles: v?.countryOfRecidence || '',
        business_operation: '',
        date_of_incorporation: v?.date_of_incorporation || '',
        website_address: '',
        emirate_of_registration: v?.emirateID || '',
        legal_entity_type: '',
        legal_entity_category: '',
        primary_industry: v?.primaryIndustry || '',
        secondary_industry: v?.secondaryIndustryOfOperation || '',
        number_of_employes: '',
        current_company_turnoer: v?.currentCompanyTernover || '',
        projected_company_turnover: '',
        sister_company: 'Y',
        legal_entity_name: '',
        group_name: '',
        registration_of_authority: '',
        registration_authority_name: '',
        vat: '',
        fab_sub_segment: '',
        sector: '',
        authorised_signatory: '',
        rollovertype: '',
        customer_status: '',
        business_details_description: '',
      },
      addressDetails: {
        address: [
          {
            addressiOrderId: '',
            addressType: v?.addressType || '',
            buildingNumber: v?.buildingNumber || '',
            buildingName: v?.buildingName || '',
            streetName: v?.streetName || '',
            locationArea: v?.locationArea || '',
            townCity: v?.townCity || '',
            zipCode: v?.zipCode || '',
            addressEmirate: v?.addressEmirate || '',
            addressPoBox: v?.addressPoBox || '',
            country: v?.countryOfRecidence || '',
            addressStayingAtThis: v?.addressStayingAtThis || '',
            mailingAddress: 'Y' || '',
            primaryMobileNumber: v?.primaryMobileNumber || '',
            officeTelephoneNumber: v?.officeTelephoneNumber || '',
            homeTelephoneNumber: v?.homeTelephoneNumber || '',
            fax: v?.fax || '',
            emailAddress: v?.emailAddress || '',
            nearestLandmark: v?.nearestLandmark || '',
          },
        ],
      },
      identityDetails: {
        identity: [
          {
            identityiOrderId: '',
            identifiertype: v?.identifiertype || '',
            number: v?.number || '',
            issuedate: v?.issuedate || '',
            expirydate: v?.expirydate || '',
            placeofissue: v?.placeofissue || '',
          },
        ],
      },

    };
    return obj;
  };
  const createWorkItem = (val:any) => {
    console.log(val, 'data from prescreening for CWI');
    let customerDetails;
    if (formType === FORM_TYPE.POS) {
      customerDetails = prepareWorkItemData(val);
    } else {
      customerDetails = prepareMbbfWorkItemData(val);
    }
    const eligibiltyData = {
      captureRequest: {
        sysRefNo: Date.now().toString(),
        initiatedBy: userDetail.userName,
        channel: 'Portal',
        productType: productCode,
        source: 'P',
        isWorkitemCreate: 'C',
        folderIndex: '',
        wiUrn: '',
        wiName: '',
      },
      customerDetails,
    };
    createWorkItemInSystem({
      workItemData: { dataArea: eligibiltyData },
      onSuccessCall: () => {
        sideMenuRef.current?.onNext();
        incrementStepper();
      },
    });
    // Save data & navigate to next Screen
    // onNext({ data: val, type: 'preScreening' });
  };

  const exitFlow = () => {
    console.log('Exit app');
  };

  const eligibiltyCheck = (val:any) => {
    setAplicantData(val);
    // Enable below for API binding(Completed for POS)
    let eligibiltyData;
    // startLoader();
    if (formType === FORM_TYPE.POS) {
      eligibiltyData = returnPOSCheckData(val);
    } else {
      eligibiltyData = returnMBBFCheckData(val);
    }
    checkForEligibilty(eligibiltyData, val);
    // Save data & navigate to next Screen
    // temp?['customerDetail']= val;
    // onNext({ data: val, type:  });
  };

  const returnForm = () => {
    console.log(tempUserData);
    switch (pageIdx.childIdx) {
      case 0:
        if (formType === 0) {
          return (
            <MBBFApplicationDetailsPage
              initialVal={applicationData?.customerDetails?.customerDetail || {}}
              onFormSubmit={eligibiltyCheck}
            />
          );
        } return (
          <ApplicationDetailsPage
            initialVal={applicationData?.customerDetails?.customerDetail || {}}
            onFormSubmit={eligibiltyCheck}
          />
        );
      case 1:
        if (formType === 0) {
          return (
            <PreScreeningMBBF
              defaultValue={tempUserData?.applicantDetail}
              onFormSubmit={createWorkItem}
              initialVal={applicationData}
              aplicantData={aplicantData}
            />
          );
        } return (
          <PreScreeningPOS
            defaultValue={tempUserData?.applicantDetail}
            onFormSubmit={createWorkItem}
            initialVal={applicationData}
            aplicantData={aplicantData}
          />
        );

      case 2:
        return <UploadDocument foldId="1456" />;

      case 3:
        return <SubmissionScreen />;
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
      {openMessage && <Message setOpen={setOpenMessage} message="Sorry not eligible." onClick={exitFlow} forSuccess />}
      {/* <UserBusinessOnBoardContext.Provider value={foo}> */}
      {pageIdx.childIdx !== 3 ? (
        <>
          <SideMenu
            ref={sideMenuRef}
            dataSource={EligibiltyCheckData.parentNode as any}
            onChangeIdx={changeIdx}
          />
          {/* <div>
            <button onClick={onNext} type="button">
              Next
            </button>
          </div> */}
          <div>
            {returnForm()}
          </div>

        </>
      ) : (
        <SubmissionScreen />
      )}
      {/* </UserBusinessOnBoardContext.Provider> */}
    </div>
  );
}

export default PreEligibilityFormComponent;
