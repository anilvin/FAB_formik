import { CustomerDetailProps } from '../../businessProductForm/PropDataType';

type Props = {
  initVal: CustomerDetailProps | undefined,
};

function CustomerDetail({ initVal }: Props) {
  //   const dataObj = props.location.state;
  const dataObj = {
    'Legal Entity Type': initVal?.legal_entity_name || ' ',
    'Group Name': initVal?.group_name || ' ',
    'Short Name': initVal?.short_name || ' ',
    'Country of Incorporation': initVal?.country_of_incorporation || ' ',
    'Date of Incorporation': initVal?.date_of_incorporation || ' ',
    Website: initVal?.website_address || ' ',
    'Emirate Registration': initVal?.emirate_of_registration || ' ',
    'Registration of Authority': initVal?.registration_of_authority || ' ',
    'Registration Authority Name': initVal?.registration_authority_name || ' ',
    'Legal Entity Category': initVal?.legal_entity_category || ' ',
    VAT: initVal?.vat || ' ',
    'FAB Sub Segment': initVal?.fab_sub_segment || ' ',
    'Primary Industry': initVal?.primary_industry || ' ',
    'Secondary Industry': initVal?.secondary_industry || ' ',
    sector: initVal?.sector || ' ',
    'Business Details Description': initVal?.business_details_description || ' ',
    'Number of employee': initVal?.number_of_employes || ' ',
    'Current Company Turnover': initVal?.current_company_turnoer || ' ',
    'Project Company Turnover': initVal?.projected_company_turnover || ' ',
    'Sister Company': initVal?.sister_company || ' ',
    'Customer Status': initVal?.customer_status || ' ',
  };

  return (
    <div>
      {Object.keys(dataObj).map((res:any) => (
        <div>
          <table>
            <tr>
              <th>
                <div style={{
                  width: '300px', textAlign: 'left', borderBottom: '1px solid #E0E0E0', padding: '5px',
                }}
                >
                  {res}
                  :
                </div>
              </th>
              <td>
                <div style={{
                  minWidth: '200px',
                  minHeight: '33px',
                  borderBottom: '1px solid #E0E0E0',
                  padding: '5px',
                }}
                >
                  {dataObj[res as keyof typeof dataObj]}
                </div>
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}
export default CustomerDetail;
