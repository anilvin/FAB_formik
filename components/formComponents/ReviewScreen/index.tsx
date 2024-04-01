import { Text } from '@genieology/gtb-ui';
import styles from '../../businessProductForm/AboutYourCompanyForm.module.css';

function Review() {
//   const dataObj = props.location.state;
  const dataObj = {
    Name: 'Shristi',
    Shortname: 'shri',
  };
  return (
    <div className={styles.mainContainer}>
      <div style={{ padding: '20px 0px' }}>
        <Text
          color="blackGrey.200"
          family="gh"
          size="large"
          weight="semibold"
        >
          Review
        </Text>
      </div>
      {Object.keys(dataObj).map((res) => (
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
                <div style={{ width: '250px', borderBottom: '1px solid #E0E0E0', padding: '5px' }}>
                  {dataObj[res]}
                </div>
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}
export default Review;
