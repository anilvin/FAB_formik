import AuthSignatory from '../formComponents/AuthorizedSignatoryComponent';
import Beneficiary from '../formComponents/BeneficiaryComponent';
import BoardOfDirector from '../formComponents/BoardOfDirectorComponent';
import CoApplicant from '../formComponents/CoApplicantFormComponent';
import JointApplicant from '../formComponents/JointApplicantFormComponent';
import PowerAttorney from '../formComponents/PowerAttorneyComponent';
import SeniorManagement from '../formComponents/SeniorManagementComponent';
import ShareHolderFormComponent from '../formComponents/ShareHolderFormComponent';
import SisterFormComponent from '../formComponents/SisterFormComponent';
import { ApplicationDetailProps } from './PropDataType';

type Props = {
  childIdx: number,
  initData?: ApplicationDetailProps,
  onFormSubmit:(val:any) => void,
};
function ConnectedPartiesForm({ childIdx, onFormSubmit, initData }: Props) {
  const returnForm = () => {
    switch (childIdx) {
      case 0:
        return (
          <ShareHolderFormComponent
            key={childIdx}
            onFormSubmit={onFormSubmit}
            initData={initData}
          />
        );
      case 1:
        return <BoardOfDirector key={childIdx} onFormSubmit={onFormSubmit} initData={initData} />;

      case 2:
        return <Beneficiary key={childIdx} onFormSubmit={onFormSubmit} initData={initData} />;

      case 3:
        return <AuthSignatory key={childIdx} onFormSubmit={onFormSubmit} initData={initData} />;

      case 4:
        return <SeniorManagement key={childIdx} onFormSubmit={onFormSubmit} initData={initData} />;

      case 5:
        return <PowerAttorney key={childIdx} onFormSubmit={onFormSubmit} initData={initData} />;

      case 6:
        return <CoApplicant key={childIdx} onFormSubmit={onFormSubmit} initData={initData} />;

      case 7:
        return (
          <SisterFormComponent
            key={childIdx}
            onFormSubmit={onFormSubmit}
            initData={initData}
          />
        );

      case 8:
        return <JointApplicant key={childIdx} onFormSubmit={onFormSubmit} initData={initData} />;

      default:
        return null;
    }
  };

  return (
    returnForm()
  );
}

export default ConnectedPartiesForm;
