import React from 'react';
import styles from './RangeSlider.module.css';

type SliderRangeProptypes = {
  startRange: number;
  endRange: number;
  setValue:(val:number) => void;
  value:number;
  moneyType: string;
};
function RangeSlider({
  startRange, endRange, value, setValue, moneyType,
}:SliderRangeProptypes) {
  return (
    <div style={{ width: '500px' }}>

      <div style={{ border: '1px solid gray', borderRadius: '2px' }}>
        {moneyType}
        {' '}
        <input
          min={startRange}
          max={endRange}
          type="number"
          className={styles.rangeInput}
          value={value}
          onChange={(event:any) => setValue(event.target.value)}
        />
        {/* {`${moneyType} ${value}`} */}
      </div>
      <input
        type="range"
        min={startRange}
        max={endRange}
        onChange={(event:any) => setValue(event.target.value)}
        style={{ width: '500px' }}
        value={value}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {`${moneyType} ${startRange}`}
        </div>
        <div>
          {`${moneyType} ${endRange}`}
        </div>
      </div>
    </div>
  );
}
export default RangeSlider;
