import { AddressDetailProps } from '../../businessProductForm/PropDataType';

type Props = {
  initVal: AddressDetailProps
};

function ContactAddress({ initVal }: Props) {
  const dataObj = {
    'Address Type': initVal?.addressType || '',
    'Building Number': initVal?.buildingNumber || '',
    'Building Name': initVal?.buildingName || '',
    'Street Name': initVal?.streetName || '',
    'Location Area': initVal?.locationArea || '',
    'Town/City': initVal?.townCity || '',
    ZipCode: initVal?.zipCode || '',
    'Emirate Address': initVal?.addressEmirate || '',
    'Address Po Box': initVal?.addressPoBox || '',
    Country: initVal?.country || '',
    'Staying at this address': initVal?.addressStayingAtThis || '',
    'Mailing Address': initVal?.mailingAddress || '',
    'Primary MobileNumber': initVal?.primaryMobileNumber || '',
    'Office TelephoneNumber': initVal?.officeTelephoneNumber || '',
    'Home TelephoneNumber': initVal?.homeTelephoneNumber || '',
    Fax: initVal?.fax || '',
    'Email Address': initVal?.emailAddress || '',
    'Nearest Landmark': initVal?.nearestLandmark || '',
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
export default ContactAddress;
