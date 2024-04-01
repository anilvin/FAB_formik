import { Button, List, ListTypesEnum } from '@genieology/gtb-ui';

function MBBFLoan() {
  return (
    <>
      <div
        style={{
          margin: '1rem',
          fontSize: '14px',
          color: '#4C4E54',
          fontWeight: 400,
          marginTop: '0rem',
        }}
      >
        <List
          style={{ justifyContent: 'space-between' }}
          list={[
            {
              subList: [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisc ing elitsed',
                },
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisc ing elitsed',
                },
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisc ing elitsed',
                },
              ],
              text: 'Maximise the value of your POS receivables to speed up your financing with a POS loan',
            },
          ]}
          testId="example"
          type={ListTypesEnum.UNORDERED}
        />
      </div>
      <div style={{ padding: '1rem', marginTop: '7rem' }}>
        <Button isBlock>
          Open MBBF Loan
        </Button>
      </div>

    </>
  );
}
export default MBBFLoan;
