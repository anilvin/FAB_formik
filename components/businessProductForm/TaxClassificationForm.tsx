import PreliminaryFormComponent from '../formComponents/Preliminaryassessment';
import UsTaxclarification from '../formComponents/Ustaxclarification';
import FtacaClassification from '../formComponents/FTCAClassification';
import CRSClassification from '../formComponents/CRSClassification';
import AdditionalCRSClassification from '../formComponents/AdditionalCrsclassification';
import {
  AdditionalFATCADataProps,
  ApplicationDetailProps,
  CRSClaasificationDataProps,
  FATCADetailsDataProps,
  PreliminaryTaxAssesmentDataProps,
  UsTaxClaasificationDataProps,
} from './PropDataType';

type Props = {
  childIdx: number,
  initData?: ApplicationDetailProps,
  onFormSubmit:(
    val:PreliminaryTaxAssesmentDataProps
    | UsTaxClaasificationDataProps
    | FATCADetailsDataProps
    | CRSClaasificationDataProps
    | AdditionalFATCADataProps
  ) => void,
};
function TaxClassificationForm({ childIdx, onFormSubmit }: Props) {
  const returnForm = () => {
    switch (childIdx) {
      case 0:
        return <PreliminaryFormComponent onFormSubmit={onFormSubmit} />;
      case 1:
        return <UsTaxclarification onFormSubmit={onFormSubmit} />;
      case 2:
        return (
          <FtacaClassification
            onFormSubmit={onFormSubmit}
          />
        );

      case 3:
        return (
          <CRSClassification
            onFormSubmit={onFormSubmit}
          />
        );

      case 4:
        return <AdditionalCRSClassification onFormSubmit={onFormSubmit} />;

      default:
        return null;
    }
  };

  return (
    returnForm()
  );
}

export default TaxClassificationForm;
