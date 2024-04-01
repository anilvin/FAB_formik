import { IdentitySingleDataProps } from '../../businessProductForm/PropDataType';

type Props = {
  initVal: IdentitySingleDataProps
};

function IdentityDetail({ initVal }: Props) {
  //   const dataObj = props.location.state;
  const dataObj = {
    'Identifier Type': initVal?.identifiertype || ' ',
    Number: initVal?.number || ' ',
    'Issue Date': initVal?.issuedate || ' ',
    'Expiry Date': initVal?.expirydate || ' ',
    'Place of Issue': initVal?.placeofissue || ' ',
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
export default IdentityDetail;
